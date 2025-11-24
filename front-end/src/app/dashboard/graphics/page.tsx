'use client';

import * as React from 'react';
import data from '../data.json';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card';
import {
    ChartContainer,
    ChartTooltip,
    ChartLegendContent,
} from '@/components/ui/chart';
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

export default function ChartPage() {
    const base = data.sinamdi_dashboard;

    // Série temporal mensal (casos e idd)
    const series = (base.series_temporais?.evolucao_mensal || []).map(s => ({
        mes: s.mes,
        casos: s.casos,
        idd: s.idd,
    }));

    // Distribuição por faixa etária
    const faixa = (base.distribuicao_faixa_etaria || []).map(f => ({
        faixa: f.faixa,
        total: f.total,
        risco: f.risco_medio,
    }));

    // Distribuição regional
    const regional = (base.distribuicao_regional || []).map(r => ({
        regiao: r.regiao,
        casos: r.casos_ativos,
        ira: r.ira,
    }));

    const seriesConfig = {
        casos: { label: 'Casos', color: 'hsl(var(--chart-1))' },
        idd: { label: 'IDD', color: 'hsl(var(--chart-2))' },
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
                        <CardDescription>Casos e IDD por mês</CardDescription>
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
                            Quantidade e risco médio por faixa
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
                            Distribuição regional — casos ativos
                        </CardTitle>
                        <CardDescription>
                            Casos ativos por região
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
