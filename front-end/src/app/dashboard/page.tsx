import data from './data.json';
import CardDashboard from '@/components/card-dashboard';
import { Separator } from '@/components/ui/separator';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {

    const cookiesStore = await cookies();

    if (!cookiesStore.get('authToken')) {
        redirect('/auth/login');
    }

    const base = data.sinamdi_dashboard;

    const centralIndicators = [
        {
            description: 'Total de casos cadastrados',
            title: String(base.indicadores_gerais.total_casos),
            trending: '5',
            details: 'Quantidade total de casos registrados',
        },
        {
            description: 'Casos ativos',
            title: String(base.indicadores_gerais.casos_ativos),
            trending: '2%',
            details: 'Casos com acompanhamento em andamento',
        },
        {
            description: 'Casos encerrados',
            title: String(base.indicadores_gerais.casos_encerrados),
            trending: '-3,5%',
            details: 'Casos finalizados',
        },
        {
            description: 'Instituições cadastradas',
            title: String(base.indicadores_gerais.instituicoes_cadastradas),
            trending: '-3,6',
            details: 'Total de instituições registradas no sistema',
        },
        {
            description: 'Autoavaliações realizadas',
            title: String(base.indicadores_gerais.autoavaliacoes_realizadas),
            trending: '-10',
            details: 'Total de autoavaliações aplicadas',
        },
    ];

    // Métricas derivadas
    const idd = base.taxas.indice_dependencia_digital;
    const taxaRecuperacao =
        (base.indicadores_gerais.casos_encerrados /
            base.indicadores_gerais.total_casos) *
        100;
    const taxaCrescimentoMes = base.taxas.taxa_crescimento_mensal;
    const tempoMedioAcomp = base.taxas.tempo_medio_acompanhamento_dias;

    // Nível médio de risco ponderado por faixa_etaria
    const distrib = base.distribuicao_faixa_etaria || [];
    const somaPesos = distrib.reduce((s, f) => s + (f.total || 0), 0) || 1;
    const nivelMedioRisco =
        distrib.reduce((s, f) => s + (f.risco_medio || 0) * (f.total || 0), 0) /
        somaPesos;

    const derivedMetrics = [
        {
            description: 'Índice de Dependência Digital (IDD)',
            title: `${idd}%`,
            trending: `${taxaCrescimentoMes}%`,
            details: 'Percentual de avaliações com alto risco',
        },
        {
            description: 'Taxa de recuperação',
            title: `${taxaRecuperacao.toFixed(2)}%`,
            trending: '2',
            details: 'Casos encerrados / total de casos',
        },
        {
            description: 'Taxa de crescimento mensal',
            title: `${taxaCrescimentoMes}%`,
            trending: '3',
            details: 'Variação percentual mês a mês',
        },
        {
            description: 'Tempo médio de acompanhamento',
            title: `${tempoMedioAcomp} dias`,
            trending: '8',
            details: 'Média do tempo de acompanhamento por caso',
        },
        {
            description: 'Nível médio de risco (faixas)',
            title: `${nivelMedioRisco.toFixed(1)}`,
            trending: '-4',
            details: 'Média ponderada do risco por faixa etária',
        },
    ];

    // Insight IA principal (maior risco previsto no próximo mês)
    const analises = base.analise_ia_predicao || [];
    const topInsight =
        analises.length > 0
            ? analises.reduce(
                  (best, cur) =>
                      cur.risco_previsto_proximo_mes >
                      (best.risco_previsto_proximo_mes || 0)
                          ? cur
                          : best,
                  analises[0]
              )
            : null;

    return (
        <div className="w-full h-full px-6 py-4">
            <h2 className="text-3xl text-gray-400 font-semibold mb-4">
                Dados Gerais
            </h2>
            <h3 className="text-xl text-gray-600 font-semibold mb-4">
                Indicadores Centrais
            </h3>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <CardDashboard
                    description="Índice de dependência digital (IDD)"
                    title={`${idd}%`}
                    trending={`${taxaCrescimentoMes}%`}
                    details="Índice que mede a dependência de tecnologias digitais"
                />
                <CardDashboard
                    description="Taxa de Recuperação Digital (TRD)"
                    title={`${taxaRecuperacao.toFixed(2)}%`}
                    trending={`—`}
                    details="Taxa que indica a recuperação de dependentes digitais"
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

            {topInsight && (
                <>
                    <Separator className="my-4" />
                    <h3 className="text-xl text-gray-600 font-semibold mb-4">
                        Insight IA Principal
                    </h3>
                    <section className="mb-4">
                        <CardDashboard
                            description={`Insight IA — faixa ${topInsight.faixa_etaria}`}
                            title={`${(
                                topInsight.risco_previsto_proximo_mes * 100
                            ).toFixed(1)}% risco previsto`}
                            details={`Fatores-chave: ${topInsight.fatores_chave.join(
                                ', '
                            )}`}
                        />
                    </section>
                </>
            )}
            
        </div>
    );
}
