export interface OverviewParams {
    startDate?: Date | null;
    endDate?: Date | null;
}
export declare const dashboardService: {
    getOverview: (params: OverviewParams) => Promise<{
        period: {
            current: {
                startDate: string;
                endDate: string;
            };
            previous: {
                startDate: string;
                endDate: string;
            };
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
            byAgeRange: {
                ageRange: string;
                count: number;
                proportion: number;
                percent: number;
            }[];
            byState: {
                state: string;
                count: number;
                proportion: number;
                percent: number;
            }[];
            byRiskLevel: {
                riskLevel: string;
                count: number;
                proportion: number;
                percent: number;
            }[];
            timeSeriesDaily: {
                date: string;
                count: number;
                mm7: number | null;
            }[];
            monthlyTotals: {
                previousTotal: number | null;
                varPercent: number | null;
                year: number;
                month: number;
                total: number;
            }[];
            ratePer100kByState: {
                state: string;
                count: number;
                population: number | null;
                ratePer100k: number | null;
            }[];
            avgRiskScoreByState: {
                state: string;
                avgRiskScore: number;
            }[];
            highRiskByAgeRange: {
                ageRange: string;
                total: number | undefined;
                highRisk: number;
                proportion: number;
                percent: number;
            }[];
        };
    }>;
};
//# sourceMappingURL=dashboard.service.d.ts.map