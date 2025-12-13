"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardService = void 0;
// src/modules/dashboard/dashboard.service.ts
const dashboard_repository_1 = require("./dashboard.repository");
// LOW = 1, MEDIUM = 2, HIGH = 3
const riskScore = {
    LOW: 1,
    MEDIUM: 2,
    HIGH: 3,
};
// ===== helpers internos =====
const buildCurrentPeriodFallback = () => {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth(); // 0–11
    const startDate = new Date(Date.UTC(year, month, 1, 0, 0, 0, 0));
    const endDate = new Date(Date.UTC(year, month + 1, 0, 23, 59, 59, 999));
    return { startDate, endDate };
};
const buildPreviousPeriod = (current) => {
    const diffMs = current.endDate.getTime() - current.startDate.getTime();
    const prevEnd = new Date(current.startDate.getTime() - 1);
    const prevStart = new Date(prevEnd.getTime() - diffMs);
    return { startDate: prevStart, endDate: prevEnd };
};
const computeMovingAverage7 = (serie) => {
    const sorted = [...serie].sort((a, b) => a.date.localeCompare(b.date));
    return sorted.map((item, index, arr) => {
        if (index < 6) {
            return { ...item, mm7: null };
        }
        let sum = 0;
        for (let k = 0; k < 7; k++) {
            sum += arr[index - k].count;
        }
        const mm7 = sum / 7;
        return { ...item, mm7 };
    });
};
const computeMonthlyVariation = (monthly) => {
    return monthly.map((item, index, arr) => {
        const prev = index > 0 ? arr[index - 1] : null;
        const prevTotal = prev ? prev.total : null;
        let varPercent = null;
        if (prevTotal && prevTotal > 0) {
            varPercent = ((item.total - prevTotal) * 100) / prevTotal;
        }
        return {
            ...item,
            previousTotal: prevTotal,
            varPercent,
        };
    });
};
const toISODate = (d) => d.toISOString().slice(0, 10);
// ===== SERVICE REAL =====
const getOverview = async (params) => {
    // 1) Sempre pegamos os counts mensais primeiro
    const monthlyCountsAllRaw = await dashboard_repository_1.dashboardRepository.getMonthlyCounts();
    let currentPeriod;
    let previousPeriod;
    // 2) Se vier período explícito, respeita
    if (params.startDate && params.endDate) {
        currentPeriod = {
            startDate: params.startDate,
            endDate: params.endDate,
        };
        previousPeriod = buildPreviousPeriod(currentPeriod);
    }
    else {
        // 3) Se NÃO vier período, "pega tudo"
        if (monthlyCountsAllRaw.length === 0) {
            // não tem dado nenhum -> fallback: mês atual
            currentPeriod = buildCurrentPeriodFallback();
            previousPeriod = buildPreviousPeriod(currentPeriod);
        }
        else {
            // utiliza o primeiro e o último mês com dados
            const first = monthlyCountsAllRaw[0];
            const last = monthlyCountsAllRaw[monthlyCountsAllRaw.length - 1];
            const startDate = new Date(Date.UTC(first.year, first.month - 1, 1, 0, 0, 0, 0));
            const endDate = new Date(Date.UTC(last.year, last.month, 0, 23, 59, 59, 999));
            currentPeriod = { startDate, endDate };
            previousPeriod = buildPreviousPeriod(currentPeriod);
        }
    }
    // 4) Com o período definido, busca o resto dos dados
    const [totalCurrent, totalPrev, highRiskCurrent, highRiskPrev, ageDistCurrent, stateDistCurrent, riskDistCurrent, riskDistPrev, dailyCountsCurrent, populations, stateRiskCountsCurrent, ageHighRiskCurrent,] = await Promise.all([
        dashboard_repository_1.dashboardRepository.getTotalCount(currentPeriod),
        dashboard_repository_1.dashboardRepository.getTotalCount(previousPeriod),
        dashboard_repository_1.dashboardRepository.getHighRiskCount(currentPeriod),
        dashboard_repository_1.dashboardRepository.getHighRiskCount(previousPeriod),
        dashboard_repository_1.dashboardRepository.groupByAgeRange(currentPeriod),
        dashboard_repository_1.dashboardRepository.groupByState(currentPeriod),
        dashboard_repository_1.dashboardRepository.groupByRiskLevel(currentPeriod),
        dashboard_repository_1.dashboardRepository.groupByRiskLevel(previousPeriod),
        dashboard_repository_1.dashboardRepository.getDailyCounts(currentPeriod),
        dashboard_repository_1.dashboardRepository.getPopulationByState(),
        dashboard_repository_1.dashboardRepository.groupStateRiskCounts(currentPeriod),
        dashboard_repository_1.dashboardRepository.groupByAgeRange(currentPeriod, true),
    ]);
    const N_current = totalCurrent || 0;
    const N_prev = totalPrev || 0;
    // ===== Cards =====
    // Card 1 – Total de coletas
    const totalVariationPercent = N_prev > 0 ? ((N_current - N_prev) * 100) / N_prev : null;
    // Card 2 – % MEDIUM+HIGH global
    const highRiskPercentCurrent = N_current > 0 ? (highRiskCurrent * 100) / N_current : 0;
    const highRiskPercentPrev = N_prev > 0 ? (highRiskPrev * 100) / N_prev : 0;
    const highRiskVariationPoints = N_prev > 0 ? highRiskPercentCurrent - highRiskPercentPrev : null;
    // Card 3 – Score médio global (LOW=1, MEDIUM=2, HIGH=3)
    const avgRiskCurrent = (() => {
        if (N_current === 0)
            return 0;
        let sum = 0;
        for (const row of riskDistCurrent) {
            const score = riskScore[row.riskLevel] || 0;
            sum += score * row.count;
        }
        return sum / N_current;
    })();
    const avgRiskPrev = (() => {
        if (N_prev === 0)
            return 0;
        let sum = 0;
        for (const row of riskDistPrev) {
            const score = riskScore[row.riskLevel] || 0;
            sum += score * row.count;
        }
        return sum / N_prev;
    })();
    const avgRiskVariationAbs = N_prev > 0 ? avgRiskCurrent - avgRiskPrev : null;
    const avgRiskVariationPercent = N_prev > 0 && avgRiskPrev !== 0
        ? ((avgRiskCurrent - avgRiskPrev) * 100) / avgRiskPrev
        : null;
    // ===== Distribuições =====
    const distByAge = ageDistCurrent.map(row => {
        const count = row.count;
        const proportion = N_current > 0 ? count / N_current : 0;
        const percent = proportion * 100;
        return {
            ageRange: row.ageRange,
            count,
            proportion,
            percent,
        };
    });
    const distByState = stateDistCurrent.map(row => {
        const count = row.count;
        const proportion = N_current > 0 ? count / N_current : 0;
        const percent = proportion * 100;
        return {
            state: row.state,
            count,
            proportion,
            percent,
        };
    });
    const distByRiskLevel = riskDistCurrent.map(row => {
        const count = row.count;
        const proportion = N_current > 0 ? count / N_current : 0;
        const percent = proportion * 100;
        return {
            riskLevel: row.riskLevel,
            count,
            proportion,
            percent,
        };
    });
    // ===== Série diária + média móvel =====
    const timeSeriesDaily = computeMovingAverage7(dailyCountsCurrent);
    // ===== Mensal + variação =====
    const monthlyTotals = computeMonthlyVariation(monthlyCountsAllRaw);
    // ===== Taxa por 100k por estado =====
    const populationMap = {};
    for (const p of populations) {
        populationMap[p.state] = p.population;
    }
    const ratePer100kByState = stateDistCurrent
        .map(row => {
        const pop = populationMap[row.state] ?? null;
        const ratePer100k = pop && pop > 0 ? (row.count * 100000) / pop : null;
        return {
            state: row.state,
            count: row.count,
            population: pop,
            ratePer100k,
        };
    })
        .sort((a, b) => (b.ratePer100k ?? 0) - (a.ratePer100k ?? 0));
    // ===== Score médio por estado =====
    const byStateAgg = {};
    for (const row of stateRiskCountsCurrent) {
        const score = riskScore[row.riskLevel] || 0;
        if (!byStateAgg[row.state]) {
            byStateAgg[row.state] = { sumScore: 0, total: 0 };
        }
        byStateAgg[row.state].sumScore += score * row.count;
        byStateAgg[row.state].total += row.count;
    }
    const avgRiskScoreByState = Object.entries(byStateAgg).map(([state, agg]) => ({
        state,
        avgRiskScore: agg.total > 0 ? agg.sumScore / agg.total : 0,
    }));
    // ===== % MEDIUM+HIGH por faixa etária =====
    const totalByAgeMap = {};
    for (const row of ageDistCurrent) {
        totalByAgeMap[row.ageRange] = row.count;
    }
    const highRiskByAgeMap = {};
    for (const row of ageHighRiskCurrent) {
        highRiskByAgeMap[row.ageRange] = row.count;
    }
    const highRiskByAgeRange = Object.keys(totalByAgeMap)
        .map(age => {
        const N_a = totalByAgeMap[age];
        const N_high = highRiskByAgeMap[age] || 0;
        const proportion = N_a > 0 ? N_high / N_a : 0;
        const percent = proportion * 100;
        return {
            ageRange: age,
            total: N_a,
            highRisk: N_high,
            proportion,
            percent,
        };
    })
        .sort((a, b) => b.percent - a.percent);
    return {
        period: {
            current: {
                startDate: toISODate(currentPeriod.startDate),
                endDate: toISODate(currentPeriod.endDate),
            },
            previous: {
                startDate: toISODate(previousPeriod.startDate),
                endDate: toISODate(previousPeriod.endDate),
            },
        },
        cards: {
            totalCollects: {
                current: N_current,
                previous: N_prev,
                variationPercent: totalVariationPercent,
            },
            highRiskShare: {
                currentPercent: highRiskPercentCurrent,
                previousPercent: highRiskPercentPrev,
                variationPoints: highRiskVariationPoints,
            },
            avgRiskScore: {
                current: avgRiskCurrent,
                previous: avgRiskPrev,
                variationAbs: avgRiskVariationAbs,
                variationPercent: avgRiskVariationPercent,
            },
        },
        charts: {
            byAgeRange: distByAge,
            byState: distByState,
            byRiskLevel: distByRiskLevel,
            timeSeriesDaily,
            monthlyTotals,
            ratePer100kByState,
            avgRiskScoreByState,
            highRiskByAgeRange,
        },
    };
};
exports.dashboardService = {
    getOverview,
};
//# sourceMappingURL=dashboard.service.js.map