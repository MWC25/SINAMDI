import CardDashboard from '@/components/card-dashboard';
import { Separator } from '@/components/ui/separator';
import { client } from '@/services/axios.config';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

type DashboardOverviewResponse = {
    period: {
        current: { startDate: string; endDate: string };
        previous: { startDate: string; endDate: string };
    };
    cards: {
        totalCollects: {
            current: number;
            previous: number;
            variationPercent: number | null;
        };
        highRiskShare: {
            currentPercent: number;
            previousPercent: number;
            variationPoints: number | null;
        };
        avgRiskScore: {
            current: number;
            previous: number;
            variationAbs: number | null;
            variationPercent: number | null;
        };
    };
    charts: {
        byAgeRange: Array<{
            ageRange: string;
            count: number;
            proportion: number;
            percent: number;
        }>;
        byState: Array<{
            state: string;
            count: number;
            proportion: number;
            percent: number;
        }>;
        byRiskLevel: Array<{
            riskLevel: string;
            count: number;
            proportion: number;
            percent: number;
        }>;
        timeSeriesDaily: Array<{
            date: string;
            count: number;
            mm7: number | null;
        }>;
        monthlyTotals: Array<{
            year: number;
            month: number;
            total: number;
            previousTotal: number | null;
            varPercent: number | null;
        }>;
        ratePer100kByState: Array<{
            state: string;
            count: number;
            population: number | null;
            ratePer100k: number | null;
        }>;
        avgRiskScoreByState: Array<{
            state: string;
            avgRiskScore: number;
        }>;
        highRiskByAgeRange: Array<{
            ageRange: string;
            total: number;
            highRisk: number;
            proportion: number;
            percent: number;
        }>;
    };
};

export default async function DashboardPage() {
    const cookiesStore = await cookies();

    const authCookie = cookiesStore.get('authToken');

    if (!authCookie) {
        redirect('/auth/login');
    }

    const cookieHeader = cookiesStore
        .getAll()
        .map(c => `${c.name}=${c.value}`)
        .join('; ');

    let dashboard: DashboardOverviewResponse | undefined;

    try {
        const res = await client.get<DashboardOverviewResponse>(
            '/dashboard/overview',
            {
                headers: {
                    // importantíssimo no SSR: repassar os cookies pro back
                    Cookie: cookieHeader,
                },
            }
        );

        dashboard = res.data;
    } catch (error: any) {
        // se mesmo com cookie der 401, manda pro login
        if (error.response?.status === 401) {
            redirect('/auth/login');
        }

        console.error('Erro ao carregar dashboard:', error);
        throw new Error('Falha ao carregar dados do dashboard');
    }

    if (!dashboard) {
        return (
            <div className="w-full h-full px-6 py-4">
                <h2 className="text-xl text-gray-600 font-semibold">
                    Dados indisponíveis
                </h2>
            </div>
        );
    }

    const { cards, charts } = dashboard;

    // ====== INDICADORES CENTRAIS (cards de cima) ======

    const centralIndicators = [
        {
            description: 'Total de coletas no período',
            title: String(cards.totalCollects.current ?? 0),
            trending:
                cards.totalCollects.variationPercent !== null &&
                cards.totalCollects.variationPercent !== undefined
                    ? `${cards.totalCollects.variationPercent.toFixed(1)}%`
                    : '—',
            details: 'Comparado ao período anterior',
        },
        {
            description: 'Participação de risco médio/alto',
            title: `${cards.highRiskShare.currentPercent.toFixed(1)}%`,
            trending:
                cards.highRiskShare.variationPoints !== null &&
                cards.highRiskShare.variationPoints !== undefined
                    ? `${cards.highRiskShare.variationPoints.toFixed(1)} pts`
                    : '—',
            details:
                'Proporção de casos com risco MEDIUM + HIGH entre todas as coletas',
        },
        {
            description: 'Score médio de risco',
            title: cards.avgRiskScore.current.toFixed(2),
            trending:
                cards.avgRiskScore.variationAbs !== null &&
                cards.avgRiskScore.variationAbs !== undefined
                    ? `${cards.avgRiskScore.variationAbs.toFixed(2)}`
                    : '—',
            details: 'LOW = 1, MEDIUM = 2, HIGH = 3',
        },
    ];

    // ====== MÉTRICAS DERIVADAS (baseadas no JSONSÃO) ======

    // IDD = % de casos de risco médio/alto no período
    const idd = cards.highRiskShare.currentPercent;

    // taxa de crescimento mensal = varPercent do último mês em monthlyTotals
    const monthlyTotals = charts.monthlyTotals ?? [];
    const lastMonth =
        monthlyTotals.length > 0
            ? monthlyTotals[monthlyTotals.length - 1]
            : null;

    const taxaCrescimentoMes =
        lastMonth && lastMonth.varPercent !== null
            ? lastMonth.varPercent
            : null;

    // faixa etária mais vulnerável (maior % de risco médio/alto)
    const topAge =
        charts.highRiskByAgeRange && charts.highRiskByAgeRange.length > 0
            ? charts.highRiskByAgeRange[0] // já vem ordenado desc lá no service
            : null;

    // estado com maior taxa por 100k (se tiver população) ou maior contagem
    let topState = null as {
        state: string;
        label: string;
    } | null;

    if (charts.ratePer100kByState && charts.ratePer100kByState.length > 0) {
        const withRate = charts.ratePer100kByState.filter(
            s => s.ratePer100k !== null
        );
        const best =
            withRate.length > 0 ? withRate[0] : charts.ratePer100kByState[0];

        topState = {
            state: best.state,
            label:
                best.ratePer100k !== null
                    ? `${best.state} — ${(best.ratePer100k ?? 0).toFixed(
                          1
                      )} casos / 100k`
                    : `${best.state} — ${best.count} coletas`,
        };
    }

    // dia com mais coletas no período
    let topDay = null as { date: string; count: number } | null;
    if (charts.timeSeriesDaily && charts.timeSeriesDaily.length > 0) {
        topDay = charts.timeSeriesDaily.reduce((max, cur) =>
            cur.count > max.count ? cur : max
        );
    }

    const derivedMetrics = [
        {
            description: 'Índice de Dependência Digital (IDD)',
            title: `${idd.toFixed(1)}%`,
            trending:
                taxaCrescimentoMes !== null
                    ? `${taxaCrescimentoMes.toFixed(1)}%`
                    : '—',
            details:
                'Percentual de coletas classificadas como risco MEDIUM ou HIGH',
        },
        {
            description: 'Taxa de crescimento mensal',
            title:
                taxaCrescimentoMes !== null
                    ? `${taxaCrescimentoMes.toFixed(1)}%`
                    : '—',
            trending: '—',
            details:
                'Variação do total de coletas em relação ao mês anterior (todas as coletas históricas)',
        },
        {
            description: 'Faixa etária mais vulnerável',
            title: topAge
                ? `${topAge.ageRange} — ${topAge.percent.toFixed(
                      1
                  )}% risco médio/alto`
                : '—',
            trending: '—',
            details:
                'Faixa com maior proporção de casos em risco MEDIUM/HIGH no período atual',
        },
        {
            description: 'Estado com maior taxa normalizada',
            title: topState ? topState.label : '—',
            trending: '—',
            details:
                'Estado com maior taxa por 100 mil habitantes (ou maior contagem, se a população não estiver configurada)',
        },
        {
            description: 'Dia com maior volume de coletas',
            title: topDay ? `${topDay.date} — ${topDay.count} coletas` : '—',
            trending: '—',
            details:
                'Dia de maior concentração de coletas no período atual (útil pra identificar picos de uso)',
        },
    ];

    return (
        <div className="w-full h-full px-6 py-4">
            <h2 className="text-3xl text-gray-400 font-semibold mb-4">
                Dados Gerais
            </h2>

            <h3 className="text-xl text-gray-600 font-semibold mb-4">
                Indicadores Centrais
            </h3>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                {/* IDD + TRD (adaptado para a nova API) */}
                <CardDashboard
                    description="Índice de dependência digital (IDD)"
                    title={`${idd.toFixed(1)}%`}
                    trending={
                        taxaCrescimentoMes !== null
                            ? `${taxaCrescimentoMes.toFixed(1)}%`
                            : '—'
                    }
                    details="Proporção de coletas com risco MEDIUM ou HIGH no período"
                />
                <CardDashboard
                    description="Score médio de risco"
                    title={cards.avgRiskScore.current.toFixed(2)}
                    trending={
                        cards.avgRiskScore.variationAbs !== null &&
                        cards.avgRiskScore.variationAbs !== undefined
                            ? `${cards.avgRiskScore.variationAbs.toFixed(2)}`
                            : '—'
                    }
                    details="LOW = 1, MEDIUM = 2, HIGH = 3 (média global do período)"
                />
                {centralIndicators.map(c => (
                    <CardDashboard
                        key={c.description}
                        description={c.description}
                        title={c.title}
                        trending={c.trending}
                        details={c.details}
                    />
                ))}
            </section>

            <Separator className="my-4" />

            <h3 className="text-xl text-gray-600 font-semibold mb-4">
                Indicadores Derivados
            </h3>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                {derivedMetrics.map(m => (
                    <CardDashboard
                        key={m.description}
                        description={m.description}
                        title={m.title}
                        trending={m.trending}
                        details={m.details}
                    />
                ))}
            </section>
        </div>
    );
}
