'use client';

import * as React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart';
import {
    AreaChart,
    Area,
    CartesianGrid,
    XAxis,
    YAxis,
    BarChart,
    Bar,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { client } from '@/services/axios.config';

// mesmo tipo que usamos no DashboardPage (pode extrair isso pra um arquivo types depois)
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

function formatMonthLabel(year: number, month: number) {
    const padded = String(month).padStart(2, '0');
    return `${padded}/${year}`;
}

function formatAgeRangeLabel(ageRange: string) {
    const map: Record<string, string> = {
        AGE_6a11: '6–11',
        AGE_12a14: '12–14',
        AGE_15a17: '15–17',
        AGE_18a25: '18–25',
        AGE_26a40: '26–40',
        AGE_41a59: '41–59',
        AGE_60a74: '60–74',
        AGE_75a89: '75–89',
        AGE_90Plus: '90+',
    };
    return map[ageRange] ?? ageRange;
}

export default function ChartPage() {
    const [dashboard, setDashboard] =
        React.useState<DashboardOverviewResponse | null>(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        let isMounted = true;

        const load = async () => {
            try {
                setLoading(true);
                setError(null);
                const res = await client.get<DashboardOverviewResponse>(
                    '/dashboard/overview'
                );
                if (!isMounted) return;
                setDashboard(res.data);
            } catch (err: any) {
                console.error('Erro ao carregar gráficos do dashboard:', err);
                if (!isMounted) return;
                setError('Falha ao carregar gráficos do dashboard');
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        load();

        return () => {
            isMounted = false;
        };
    }, []);

    if (loading) {
        return (
            <div className="w-full h-full px-6 py-4">
                <p className="text-sm text-muted-foreground">
                    Carregando gráficos...
                </p>
            </div>
        );
    }

    if (error || !dashboard) {
        return (
            <div className="w-full h-full px-6 py-4">
                <p className="text-sm text-destructive">
                    {error ??
                        'Não foi possível carregar os dados do dashboard.'}
                </p>
            </div>
        );
    }

    const { charts } = dashboard;

    // ========= 1) Série temporal mensal =========
    // usamos monthlyTotals para "casos" e a varPercent como segunda série (tipo “variação %”)
    const series = (charts.monthlyTotals || []).map(m => ({
        mes: formatMonthLabel(m.year, m.month),
        casos: m.total,
        idd: m.varPercent ?? 0, // reaproveitamos a key "idd" pro gráfico, mas representando variação %
    }));

    // ========= 2) Distribuição por faixa etária =========
    // usamos highRiskByAgeRange para ter total e % de risco médio/alto
    const faixa = (charts.highRiskByAgeRange || []).map(f => ({
        faixa: formatAgeRangeLabel(f.ageRange),
        total: f.total,
        risco: f.percent, // se quiser um segundo gráfico depois
    }));

    // ========= 3) Distribuição regional (por estado, por enquanto) =========
    const regional = (charts.byState || []).map(r => ({
        regiao: r.state, // UF por enquanto
        casos: r.count,
        ira: r.percent, // índice relativo, se quiser em outro gráfico
    }));

    const seriesConfig = {
        casos: { label: 'Casos', color: 'hsl(var(--chart-1))' },
        // aqui "idd" é na verdade a variação %, mas mantemos a key pra bater com CSS vars
        idd: { label: 'Variação %', color: 'hsl(var(--chart-2))' },
    };

    const faixaConfig = {
        total: { label: 'Total', color: 'hsl(var(--chart-3))' },
    };

    const regionalConfig = {
        casos: { label: 'Casos ativos', color: 'hsl(var(--chart-4))' },
    };

    return (
        <div className="w-full h-full px-6 py-4 space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Evolução mensal de casos</CardTitle>
                        <CardDescription>
                            Total de coletas e variação percentual mês a mês
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer
                            config={seriesConfig}
                            className="h-[300px]">
                            <ResponsiveContainer>
                                <AreaChart data={series}>
                                    <defs>
                                        <linearGradient
                                            id="gradCasos"
                                            x1="0"
                                            x2="0"
                                            y1="0"
                                            y2="1">
                                            <stop
                                                offset="5%"
                                                stopColor="var(--color-casos)"
                                                stopOpacity={0.8}
                                            />
                                            <stop
                                                offset="95%"
                                                stopColor="var(--color-casos)"
                                                stopOpacity={0.1}
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            id="gradIdd"
                                            x1="0"
                                            x2="0"
                                            y1="0"
                                            y2="1">
                                            <stop
                                                offset="5%"
                                                stopColor="var(--color-idd)"
                                                stopOpacity={0.8}
                                            />
                                            <stop
                                                offset="95%"
                                                stopColor="var(--color-idd)"
                                                stopOpacity={0.1}
                                            />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        vertical={false}
                                    />
                                    <XAxis dataKey="mes" />
                                    <YAxis />
                                    <ChartTooltip />
                                    <Area
                                        type="monotone"
                                        dataKey="casos"
                                        stroke="var(--color-casos)"
                                        fill="url(#gradCasos)"
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="idd"
                                        stroke="var(--color-idd)"
                                        fill="url(#gradIdd)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </ChartContainer>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Distribuição por faixa etária</CardTitle>
                        <CardDescription>
                            Total de coletas e concentração de risco por faixa
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer
                            config={faixaConfig}
                            className="h-[300px]">
                            <ResponsiveContainer>
                                <BarChart data={faixa}>
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        vertical={false}
                                    />
                                    <XAxis dataKey="faixa" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar
                                        dataKey="total"
                                        fill="var(--color-total)"
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>

            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Distribuição por estado — casos ativos/coletas
                        </CardTitle>
                        <CardDescription>
                            Quantidade de coletas por UF no período atual
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer
                            config={regionalConfig}
                            className="h-[300px]">
                            <ResponsiveContainer>
                                <BarChart data={regional} layout="horizontal">
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        vertical={false}
                                    />
                                    <XAxis dataKey="regiao" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar
                                        dataKey="casos"
                                        fill="var(--color-casos)"
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
