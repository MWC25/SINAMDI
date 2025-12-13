"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardRepository = void 0;
const prisma_1 = require("../config/prisma");
const client_1 = require("../generated/prisma/client");
const buildCollectWhere = (period) => {
    const where = {};
    if (period) {
        where.collectedAt = {
            gte: period.startDate,
            lte: period.endDate,
        };
    }
    return where;
};
const buildCollectDataWhere = (period) => {
    const where = {};
    if (period) {
        // 1–1 com Collect → filtro via relação
        where.collect = {
            is: {
                collectedAt: {
                    gte: period.startDate,
                    lte: period.endDate,
                },
            },
        };
    }
    return where;
};
// 1) Total de coletas (usa tabela Collect)
async function getTotalCount(period) {
    const where = buildCollectWhere(period);
    return prisma_1.prisma.collect.count({ where });
}
// 2) Total de casos "preocupantes" (MEDIUM + HIGH) – usa CollectData
async function getHighRiskCount(period) {
    const where = buildCollectDataWhere(period);
    where.riskLevel = {
        in: [client_1.CollectRisk.MEDIUM, client_1.CollectRisk.HIGH],
    };
    return prisma_1.prisma.collectData.count({ where });
}
// 3) Distribuição por faixa etária (CollectData.ageRange)
async function groupByAgeRange(period, onlyHighRisk = false) {
    const where = buildCollectDataWhere(period);
    if (onlyHighRisk) {
        where.riskLevel = {
            in: [client_1.CollectRisk.MEDIUM, client_1.CollectRisk.HIGH],
        };
    }
    const rows = await prisma_1.prisma.collectData.groupBy({
        by: ['ageRange'],
        where,
        _count: { _all: true },
    });
    return rows.map((row) => ({
        ageRange: row.ageRange,
        count: row._count._all,
    }));
}
// 4) Distribuição por estado (CollectData.state)
async function groupByState(period) {
    const where = buildCollectDataWhere(period);
    const rows = await prisma_1.prisma.collectData.groupBy({
        by: ['state'],
        where,
        _count: { _all: true },
    });
    return rows.map((row) => ({
        state: row.state,
        count: row._count._all,
    }));
}
// 5) Distribuição por nível de risco (CollectData.riskLevel)
async function groupByRiskLevel(period) {
    const where = buildCollectDataWhere(period);
    const rows = await prisma_1.prisma.collectData.groupBy({
        by: ['riskLevel'],
        where,
        _count: { _all: true },
    });
    return rows.map((row) => ({
        riskLevel: row.riskLevel,
        count: row._count._all,
    }));
}
// 6) Contagem por estado x risco (pra score médio por estado)
async function groupStateRiskCounts(period) {
    const where = buildCollectDataWhere(period);
    const rows = await prisma_1.prisma.collectData.groupBy({
        by: ['state', 'riskLevel'],
        where,
        _count: { _all: true },
    });
    return rows.map((row) => ({
        state: row.state,
        riskLevel: row.riskLevel,
        count: row._count._all,
    }));
}
// 7) Séries diárias – usa Collect.collectedAt
async function getDailyCounts(period) {
    let rows;
    if (period) {
        rows = await prisma_1.prisma.$queryRaw `
      SELECT DATE(collectedAt) AS day, COUNT(*) AS count
      FROM Collect
      WHERE collectedAt BETWEEN ${period.startDate} AND ${period.endDate}
      GROUP BY DATE(collectedAt)
      ORDER BY day;
    `;
    }
    else {
        rows = await prisma_1.prisma.$queryRaw `
      SELECT DATE(collectedAt) AS day, COUNT(*) AS count
      FROM Collect
      GROUP BY DATE(collectedAt)
      ORDER BY day;
    `;
    }
    return rows.map((row) => {
        const d = row.day instanceof Date
            ? row.day.toISOString().slice(0, 10)
            : String(row.day);
        return {
            date: d,
            count: Number(row.count),
        };
    });
}
// 8) Contagem mensal – usa Collect.collectedAt
async function getMonthlyCounts() {
    const rows = await prisma_1.prisma.$queryRaw `
    SELECT
      YEAR(collectedAt)  AS year,
      MONTH(collectedAt) AS month,
      COUNT(*)           AS total
    FROM Collect
    GROUP BY YEAR(collectedAt), MONTH(collectedAt)
    ORDER BY year, month;
  `;
    return rows.map((row) => ({
        year: Number(row.year),
        month: Number(row.month),
        total: Number(row.total),
    }));
}
// 9) População por estado (por enquanto stub, pra não quebrar nada)
async function getPopulationByState() {
    // TODO: conectar com uma tabela real tipo StatePopulation
    // por enquanto devolve vazio pra não dar erro de tabela inexistente
    return [];
}
exports.dashboardRepository = {
    getTotalCount,
    getHighRiskCount,
    groupByAgeRange,
    groupByState,
    groupByRiskLevel,
    groupStateRiskCounts,
    getDailyCounts,
    getMonthlyCounts,
    getPopulationByState,
};
//# sourceMappingURL=dashboard.repository.js.map