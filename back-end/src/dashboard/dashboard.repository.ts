import { prisma } from "../config/prisma";
import { CollectRisk, Prisma } from "../generated/prisma/client";
export type DateRange = {
  startDate: Date;
  endDate: Date;
};

const buildCollectWhere = (period?: DateRange): Prisma.CollectWhereInput => {
  const where: Prisma.CollectWhereInput = {};

  if (period) {
    where.collectedAt = {
      gte: period.startDate,
      lte: period.endDate,
    };
  }

  return where;
};

const buildCollectDataWhere = (
  period?: DateRange,
): Prisma.CollectDataWhereInput => {
  const where: Prisma.CollectDataWhereInput = {};

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
async function getTotalCount(period?: DateRange): Promise<number> {
  const where = buildCollectWhere(period);
  return prisma.collect.count({ where });
}

// 2) Total de casos "preocupantes" (MEDIUM + HIGH) – usa CollectData
async function getHighRiskCount(period?: DateRange): Promise<number> {
  const where: Prisma.CollectDataWhereInput = buildCollectDataWhere(period);
  where.riskLevel = {
    in: [CollectRisk.MEDIUM, CollectRisk.HIGH],
  };

  return prisma.collectData.count({ where });
}

// 3) Distribuição por faixa etária (CollectData.ageRange)
async function groupByAgeRange(
  period?: DateRange,
  onlyHighRisk = false,
): Promise<Array<{ ageRange: string; count: number }>> {
  const where: Prisma.CollectDataWhereInput = buildCollectDataWhere(period);

  if (onlyHighRisk) {
    where.riskLevel = {
      in: [CollectRisk.MEDIUM, CollectRisk.HIGH],
    };
  }

  const rows = await prisma.collectData.groupBy({
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
async function groupByState(
  period?: DateRange,
): Promise<Array<{ state: string; count: number }>> {
  const where = buildCollectDataWhere(period);

  const rows = await prisma.collectData.groupBy({
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
async function groupByRiskLevel(
  period?: DateRange,
): Promise<Array<{ riskLevel: string; count: number }>> {
  const where = buildCollectDataWhere(period);

  const rows = await prisma.collectData.groupBy({
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
async function groupStateRiskCounts(
  period?: DateRange,
): Promise<Array<{ state: string; riskLevel: string; count: number }>> {
  const where = buildCollectDataWhere(period);

  const rows = await prisma.collectData.groupBy({
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
async function getDailyCounts(
  period?: DateRange,
): Promise<Array<{ date: string; count: number }>> {
  let rows: Array<{ day: Date | string; count: bigint }>;

  if (period) {
    rows = await prisma.$queryRaw<
      Array<{ day: Date | string; count: bigint }>
    >`
      SELECT DATE(collectedAt) AS day, COUNT(*) AS count
      FROM Collect
      WHERE collectedAt BETWEEN ${period.startDate} AND ${period.endDate}
      GROUP BY DATE(collectedAt)
      ORDER BY day;
    `;
  } else {
    rows = await prisma.$queryRaw<
      Array<{ day: Date | string; count: bigint }>
    >`
      SELECT DATE(collectedAt) AS day, COUNT(*) AS count
      FROM Collect
      GROUP BY DATE(collectedAt)
      ORDER BY day;
    `;
  }

  return rows.map((row) => {
    const d =
      row.day instanceof Date
        ? row.day.toISOString().slice(0, 10)
        : String(row.day);
    return {
      date: d,
      count: Number(row.count),
    };
  });
}

// 8) Contagem mensal – usa Collect.collectedAt
async function getMonthlyCounts(): Promise<
  Array<{ year: number; month: number; total: number }>
> {
  const rows = await prisma.$queryRaw<
    Array<{ year: number; month: number; total: bigint }>
  >`
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
async function getPopulationByState(): Promise<
  Array<{ state: string; population: number }>
> {
  // TODO: conectar com uma tabela real tipo StatePopulation
  // por enquanto devolve vazio pra não dar erro de tabela inexistente
  return [];
}

export const dashboardRepository = {
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