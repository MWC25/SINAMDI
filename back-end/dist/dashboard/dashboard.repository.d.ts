export type DateRange = {
    startDate: Date;
    endDate: Date;
};
declare function getTotalCount(period?: DateRange): Promise<number>;
declare function getHighRiskCount(period?: DateRange): Promise<number>;
declare function groupByAgeRange(period?: DateRange, onlyHighRisk?: boolean): Promise<Array<{
    ageRange: string;
    count: number;
}>>;
declare function groupByState(period?: DateRange): Promise<Array<{
    state: string;
    count: number;
}>>;
declare function groupByRiskLevel(period?: DateRange): Promise<Array<{
    riskLevel: string;
    count: number;
}>>;
declare function groupStateRiskCounts(period?: DateRange): Promise<Array<{
    state: string;
    riskLevel: string;
    count: number;
}>>;
declare function getDailyCounts(period?: DateRange): Promise<Array<{
    date: string;
    count: number;
}>>;
declare function getMonthlyCounts(): Promise<Array<{
    year: number;
    month: number;
    total: number;
}>>;
declare function getPopulationByState(): Promise<Array<{
    state: string;
    population: number;
}>>;
export declare const dashboardRepository: {
    getTotalCount: typeof getTotalCount;
    getHighRiskCount: typeof getHighRiskCount;
    groupByAgeRange: typeof groupByAgeRange;
    groupByState: typeof groupByState;
    groupByRiskLevel: typeof groupByRiskLevel;
    groupStateRiskCounts: typeof groupStateRiskCounts;
    getDailyCounts: typeof getDailyCounts;
    getMonthlyCounts: typeof getMonthlyCounts;
    getPopulationByState: typeof getPopulationByState;
};
export {};
//# sourceMappingURL=dashboard.repository.d.ts.map