---
marp: true
---

# SINAMDI – Fórmulas do Dashboard  
## Versão Matemática (LaTeX) + JS + SQL “brutão”

---

## 0. Convenções usadas

### 0.1. Tabela principal (SQL)

Usarei a tabela `collects` com estes campos:

- `id` (PK)
- `collected_at` (DATETIME ou TIMESTAMP)
- `age_range` (VARCHAR ou ENUM – ex.: '10-14', '15-17', '18-24', etc.)
- `location_city` (VARCHAR)
- `location_state` (VARCHAR ou ENUM de UF – ex.: 'PE', 'SP', etc.)
- `channel` (VARCHAR ou ENUM – ex.: 'WHATSAPP', 'SITE', 'APP', 'ESCOLA'…)
- `risk_level` (VARCHAR ou ENUM – ex.: 'LOW', 'MODERATE', 'HIGH', 'CRITICAL')
- `source` (VARCHAR, opcional)

---

### 0.2. Dataset em JavaScript

No JS, vou assumir um array assim:

    const data = [
      {
        id: '...',
        collectedAt: new Date('2025-01-01T10:00:00Z'),
        ageRange: '15-17',
        locationCity: 'Recife',
        locationState: 'PE',
        channel: 'WHATSAPP',
        riskLevel: 'HIGH',
        source: 'ESCOLA'
      },
      // ...
    ];

---

### 0.3. Notação matemática

- Conjunto de registros:

  $$
  \mathcal{D} = \{1, 2, \dots, N\}
  $$

- Total de registros:

  $$
  N = |\mathcal{D}|
  $$

---

- Para cada registro $i$:

  - $d_i$: data/hora (`collected_at`)
  - $a_i$: faixa etária (`age_range`)
  - $city_i$: cidade (`location_city`)
  - $state_i$: estado (`location_state`)
  - $c_i$: canal (`channel`)
  - $r_i$: nível de risco (`risk_level`)

- Função indicadora (equivalente a `IF(condição, 1, 0)`):

  $$
  \mathbf{1}\{\text{condição}\} =
  \begin{cases}
  1, & \text{se a condição é verdadeira}\\
  0, & \text{caso contrário}
  \end{cases}
  $$

---

## 1. Total de registros (com ou sem período)

### 1.1. Total geral

**LaTeX**

$$
N_{\text{total}} = \sum_{i \in \mathcal{D}} 1
$$

**JS**

    const N_total = data.length;

**SQL**

    SELECT COUNT(*) AS total
    FROM collects;

---

### 1.2. Total no período [d_início, d_fim]

Considere datas $d_{\text{inicio}}$ e $d_{\text{fim}}$.

**LaTeX**

$$
N_{\text{período}} =
\sum_{i \in \mathcal{D}}
\mathbf{1}\{d_{\text{inicio}} \le d_i \le d_{\text{fim}}\}
$$

**JS**

    const inicio = new Date('2025-01-01T00:00:00Z');
    const fim    = new Date('2025-01-31T23:59:59Z');

    const N_periodo = data.filter(row =>
      row.collectedAt >= inicio && row.collectedAt <= fim
    ).length;

---
**SQL**

    SELECT COUNT(*) AS total_periodo
    FROM collects
    WHERE collected_at BETWEEN :inicio AND :fim;

---

## 2. Contagem com filtro genérico F

Um filtro $F$ pode ser algo como:

> “faixa etária = '15-17' E risco = 'HIGH' E estado = 'PE'”

---

### 2.1. Fórmula geral

**LaTeX**

$$
N(F) =
\sum_{i \in \mathcal{D}}
\mathbf{1}\{\text{registro } i \text{ satisfaz } F\}
$$

---

### 2.2. Exemplo: faixa etária 15–17, risco HIGH, UF = PE

**LaTeX**

$$
N(F) =
\sum_{i \in \mathcal{D}}
\mathbf{1}\{a_i = \text{"15-17"} \land r_i = \text{"HIGH"} \land state_i = \text{"PE"}\}
$$

**JS**

    const N_F = data.filter(row =>
      row.ageRange === '15-17' &&
      row.riskLevel === 'HIGH' &&
      row.locationState === 'PE'
    ).length;

---

**SQL**

    SELECT COUNT(*) AS total
    FROM collects
    WHERE age_range      = '15-17'
      AND risk_level     = 'HIGH'
      AND location_state = 'PE';

---

## 3. Proporções e percentuais

### 3.1. Proporção de F sobre o total

**LaTeX**

$$
p(F) = \frac{N(F)}{N_{\text{total}}}
$$

Percentual:

$$
\%\,(F) = p(F) \cdot 100
$$

**JS**

    const p_F    = N_F / N_total;  // proporção
    const perc_F = p_F * 100;      // em %

---

**SQL**  
(geralmente você calcula o percentual no back ou em outra query; mas pode fazer algo assim:)

    SELECT
      COUNT(*) AS N_F,
      (SELECT COUNT(*) FROM collects) AS N_total,
      COUNT(*) * 100.0 / (SELECT COUNT(*) FROM collects) AS perc_F
    FROM collects
    WHERE ...condições de F...;

---

### 3.2. Proporção condicional p(F | G)

Exemplo clássico: “proporção de HIGH dado que faixa etária é 15–17”.

**LaTeX**

$$
p(F \mid G) = \frac{N(F \land G)}{N(G)}
$$

onde

$$
N(F \land G) = \sum_{i \in \mathcal{D}} \mathbf{1}\{F(i) \land G(i)\}
$$

**Exemplo específico**

- $F$: $r_i = \text{"HIGH"}$
- $G$: $a_i = \text{"15-17"}$

---

**JS**

    const grupo = data.filter(row => row.ageRange === '15-17');
    const N_G   = grupo.length;

    const N_FG  = grupo.filter(row => row.riskLevel === 'HIGH').length;

    const p_F_given_G    = N_FG / N_G;
    const perc_F_given_G = p_F_given_G * 100;

---

**SQL**

    -- N(G): total na faixa 15-17
    SELECT COUNT(*) AS N_G
    FROM collects
    WHERE age_range = '15-17';

    -- N(F ∧ G): total 15-17 E HIGH
    SELECT COUNT(*) AS N_FG
    FROM collects
    WHERE age_range = '15-17'
      AND risk_level = 'HIGH';

    -- ou em uma query só (exemplo com CTE)
    WITH base AS (
      SELECT *
      FROM collects
      WHERE age_range = '15-17'
    )
    SELECT
      COUNT(*) AS N_G,
      SUM(CASE WHEN risk_level = 'HIGH' THEN 1 ELSE 0 END) AS N_FG,
      SUM(CASE WHEN risk_level = 'HIGH' THEN 1 ELSE 0 END) * 100.0 / COUNT(*) AS perc_F_given_G
    FROM base;

---

## 4. Distribuições por categoria

### 4.1. Distribuição por faixa etária

**LaTeX**

Para uma faixa $a$:

$$
N_a = \sum_{i \in \mathcal{D}} \mathbf{1}\{a_i = a\}
$$

$$
p_a = \frac{N_a}{N_{\text{total}}}, \quad \%\_a = p_a \cdot 100
$$

---
**JS**

    const N_total = data.length;

    // mapa: faixaEtaria -> contagem
    const porFaixa = data.reduce((acc, row) => {
      const key = row.ageRange;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    // adicionando proporção e percentual
    const distFaixa = Object.entries(porFaixa).map(([ageRange, count]) => {
      const proportion = count / N_total;
      const percent = proportion * 100;
      return { ageRange, count, proportion, percent };
    });

---

**SQL**

    SELECT
      age_range,
      COUNT(*) AS count,
      COUNT(*) * 1.0 / (SELECT COUNT(*) FROM collects) AS proportion,
      COUNT(*) * 100.0 / (SELECT COUNT(*) FROM collects) AS percent
    FROM collects
    GROUP BY age_range
    ORDER BY age_range;

---

### 4.2. Distribuição por estado (UF)

**LaTeX**

Para um estado $s$:

$$
N_{s} = \sum_{i \in \mathcal{D}} \mathbf{1}\{state_i = s\}
$$

$$
p_{s} = \frac{N_s}{N_{\text{total}}}, \quad \%\_s = p_s \cdot 100
$$

---

**JS**

    const porEstado = data.reduce((acc, row) => {
      const key = row.locationState;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    const distEstado = Object.entries(porEstado).map(([state, count]) => {
      const proportion = count / N_total;
      const percent = proportion * 100;
      return { state, count, proportion, percent };
    });

---

**SQL**

    SELECT
      location_state,
      COUNT(*) AS count,
      COUNT(*) * 1.0 / (SELECT COUNT(*) FROM collects) AS proportion,
      COUNT(*) * 100.0 / (SELECT COUNT(*) FROM collects) AS percent
    FROM collects
    GROUP BY location_state
    ORDER BY location_state;

---

### 4.3. Distribuição por nível de risco

**LaTeX**

Para um nível de risco $r$:

$$
N_{r} = \sum_{i \in \mathcal{D}} \mathbf{1}\{r_i = r\}
$$

$$
p_{r} = \frac{N_r}{N_{\text{total}}}, \quad \%\_r = p_r \cdot 100
$$

---

**JS**

    const porRisco = data.reduce((acc, row) => {
      const key = row.riskLevel;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    const distRisco = Object.entries(porRisco).map(([riskLevel, count]) => {
      const proportion = count / N_total;
      const percent = proportion * 100;
      return { riskLevel, count, proportion, percent };
    });

---

**SQL**

    SELECT
      risk_level,
      COUNT(*) AS count,
      COUNT(*) * 1.0 / (SELECT COUNT(*) FROM collects) AS proportion,
      COUNT(*) * 100.0 / (SELECT COUNT(*) FROM collects) AS percent
    FROM collects
    GROUP BY risk_level
    ORDER BY risk_level;

---

## 5. Séries temporais (por dia) e média móvel

### 5.1. Contagem por dia

**LaTeX**

Seja $N_{\text{dia}}(t)$ o número de registros no dia $t$:

$$
N_{\text{dia}}(t) =
\sum_{i \in \mathcal{D}} \mathbf{1}\{\text{data}(d_i) = t\}
$$

---

**JS**

Agrupar por data (ignorando horário):

    function toDateKey(date) {
      // exemplo simples: 'YYYY-MM-DD'
      const d = new Date(date);
      const year = d.getUTCFullYear();
      const month = String(d.getUTCMonth() + 1).padStart(2, '0');
      const day = String(d.getUTCDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }

    const porDia = data.reduce((acc, row) => {
      const dayKey = toDateKey(row.collectedAt);
      acc[dayKey] = (acc[dayKey] || 0) + 1;
      return acc;
    }, {});

    // transformar em array ordenado
    const serieDia = Object.entries(porDia)
      .sort(([d1], [d2]) => d1.localeCompare(d2))
      .map(([date, count]) => ({ date, count }));

---

**SQL**

    SELECT
      DATE(collected_at) AS day,
      COUNT(*) AS count
    FROM collects
    GROUP BY DATE(collected_at)
    ORDER BY day;

---

### 5.2. Média móvel de 7 dias

**LaTeX**

$$
MM7(t) = \frac{1}{7} \sum_{k=0}^{6} N_{\text{dia}}(t - k)
$$

---

**JS**

    // supondo serieDia = [{ date: '2025-01-01', count: 10 }, ...] ordenado
    const serieMM7 = serieDia.map((item, index, arr) => {
      if (index < 6) {
        return { ...item, mm7: null }; // ou 0, ou deixar sem
      }
      let sum = 0;
      for (let k = 0; k < 7; k++) {
        sum += arr[index - k].count;
      }
      const mm7 = sum / 7;
      return { ...item, mm7 };
    });

---

**SQL**

Média móvel em SQL puro é mais chata, mas em bancos com window functions fica assim (exemplo MySQL 8+):

    SELECT
      day,
      COUNT(*) AS count,
      AVG(COUNT(*)) OVER (
        ORDER BY day
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
      ) AS mm7
    FROM (
      SELECT DATE(collected_at) AS day
      FROM collects
    ) AS t
    GROUP BY day
    ORDER BY day;

---

## 6. Variação percentual mensal

### 6.1. Contagem por mês (ano, mês)

**LaTeX**

$$
N_{\text{mes}}(y,m) =
\sum_{i \in \mathcal{D}}
\mathbf{1}\{\text{ano}(d_i) = y \land \text{mes}(d_i) = m\}
$$

**SQL**

    SELECT
      YEAR(collected_at)  AS ano,
      MONTH(collected_at) AS mes,
      COUNT(*) AS total
    FROM collects
    GROUP BY YEAR(collected_at), MONTH(collected_at)
    ORDER BY ano, mes;

---

### 6.2. Variação percentual mês vs mês anterior

**LaTeX**

$$
\Delta_{\text{mes}\%}(y,m) =
\frac{N_{\text{mes}}(y,m) - N_{\text{mes}}(y,m-1)}
     {N_{\text{mes}}(y,m-1)} \cdot 100
$$

(Tratar caso $N_{\text{mes}}(y,m-1) = 0$.)

---

**JS**

Assumindo um array `porMes` assim:

    const porMes = [
      { year: 2025, month: 1, total: 100 },
      { year: 2025, month: 2, total: 120 },
      // ...
    ];

---

Cálculo:

    const comVariacao = porMes.map((item, index, arr) => {
      if (index === 0) {
        return { ...item, varPercent: null }; // primeiro mês não tem comparação
      }
      const prev = arr[index - 1];
      const prevTotal = prev.total;
      let varPercent = null;
      if (prevTotal > 0) {
        varPercent = (item.total - prevTotal) * 100.0 / prevTotal;
      }
      return { ...item, varPercent };
    });

---

**SQL** (exemplo com window function; pode variar por banco):

    WITH monthly AS (
      SELECT
        YEAR(collected_at)  AS ano,
        MONTH(collected_at) AS mes,
        COUNT(*) AS total
      FROM collects
      GROUP BY YEAR(collected_at), MONTH(collected_at)
    )
    SELECT
      ano,
      mes,
      total,
      LAG(total) OVER (ORDER BY ano, mes) AS total_anterior,
      CASE
        WHEN LAG(total) OVER (ORDER BY ano, mes) = 0 THEN NULL
        ELSE (total - LAG(total) OVER (ORDER BY ano, mes))
               * 100.0 / LAG(total) OVER (ORDER BY ano, mes)
      END AS var_percent
    FROM monthly
    ORDER BY ano, mes;

---

## 7. Taxa por 100.000 habitantes (normalização)

### 7.1. Base teórica

Seja $Pop(s)$ a população do estado $s$.

**LaTeX**

$$
\text{Taxa\_100k}(s) = \frac{N_s}{Pop(s)} \cdot 100000
$$

onde

$$
N_s = \sum_{i \in \mathcal{D}} \mathbf{1}\{state_i = s\}
$$

---

### 7.2. SQL com tabela de população

Assuma uma tabela `populations`:

- `location_state` (UF)
- `population` (inteiro)

**SQL**

    SELECT
      c.location_state,
      COUNT(*) AS N_s,
      p.population,
      COUNT(*) * 100000.0 / p.population AS taxa_100k
    FROM collects c
    JOIN populations p
      ON p.location_state = c.location_state
    GROUP BY c.location_state, p.population
    ORDER BY taxa_100k DESC;

---

### 7.3. JS

Assumindo um mapa de populações:

    const populationByState = {
      'PE': 9600000,
      'SP': 46000000,
      // ...
    };

    const countsByState = data.reduce((acc, row) => {
      const state = row.locationState;
      acc[state] = (acc[state] || 0) + 1;
      return acc;
    }, {});

    const taxaPorEstado = Object.entries(countsByState).map(([state, count]) => {
      const pop = populationByState[state] || 1; // evitar divisão por 0
      const ratePer100k = (count * 100000) / pop;
      return { state, count, pop, ratePer100k };
    });

---

## 8. Índice de risco numérico (score médio)

### 8.1. Definindo o score de cada nível

**LaTeX**

$$
score(\text{LOW}) = s_{\text{low}}, \quad
score(\text{MODERATE}) = s_{\text{moderate}}, \quad
score(\text{HIGH}) = s_{\text{high}}, \quad
score(\text{CRITICAL}) = s_{\text{critical}}
$$

Exemplo:

- $s_{\text{low}} = 1$
- $s_{\text{moderate}} = 2$
- $s_{\text{high}} = 3$
- $s_{\text{critical}} = 4$

---

### 8.2. Score médio global

**LaTeX**

$$
\bar{R} = \frac{1}{N_{\text{total}}}
\sum_{i \in \mathcal{D}} score(r_i)
$$

---

**JS**

    const riskScore = {
      LOW: 1,
      MODERATE: 2,
      HIGH: 3,
      CRITICAL: 4
    };

    const totalScore = data.reduce((acc, row) => {
      return acc + (riskScore[row.riskLevel] || 0);
    }, 0);

    const R_media = totalScore / N_total;

---

### 8.3. Score médio por estado

**LaTeX**

$$
\bar{R}_{s} =
\frac{1}{N_s} \sum_{i \in \mathcal{D}}
score(r_i) \cdot \mathbf{1}\{state_i = s\}
$$

---

**SQL**

    SELECT
      location_state,
      AVG(CASE risk_level
            WHEN 'LOW'      THEN 1
            WHEN 'MODERATE' THEN 2
            WHEN 'HIGH'     THEN 3
            WHEN 'CRITICAL' THEN 4
          END) AS avg_risk_score
    FROM collects
    GROUP BY location_state
    ORDER BY avg_risk_score DESC;

---

**JS**

    const scorePorEstado = {};

    data.forEach(row => {
      const state = row.locationState;
      const score = riskScore[row.riskLevel] || 0;
      if (!scorePorEstado[state]) {
        scorePorEstado[state] = { sum: 0, count: 0 };
      }
      scorePorEstado[state].sum   += score;
      scorePorEstado[state].count += 1;
    });

    const avgScorePorEstado = Object.entries(scorePorEstado).map(([state, info]) => {
      return {
        state,
        avgRiskScore: info.sum / info.count
      };
    });

---

## 9. Casos de ALTO/CRÍTICO (conjunto “preocupante”)

### 9.1. Definição

**LaTeX**

$$
\mathcal{R}_{\text{alto}} = \{\text{HIGH}, \text{CRITICAL}\}
$$

$$
N_{\text{alto}} =
\sum_{i \in \mathcal{D}}
\mathbf{1}\{r_i \in \mathcal{R}_{\text{alto}}\}
$$

$$
p_{\text{alto}} = \frac{N_{\text{alto}}}{N_{\text{total}}}, \quad
\%\_{\text{alto}} = p_{\text{alto}} \cdot 100
$$

---

### 9.2. JS

    const altos = data.filter(row =>
      row.riskLevel === 'HIGH' || row.riskLevel === 'CRITICAL'
    );

    const N_alto  = altos.length;
    const p_alto  = N_alto / N_total;
    const perc_alto = p_alto * 100;

### 9.3. SQL

    SELECT
      COUNT(*) AS N_alto,
      (SELECT COUNT(*) FROM collects) AS N_total,
      COUNT(*) * 100.0 / (SELECT COUNT(*) FROM collects) AS perc_alto
    FROM collects
    WHERE risk_level IN ('HIGH', 'CRITICAL');

---

### 9.4. Percentual de ALTO/CRÍTICO por faixa etária

**LaTeX**

Para uma faixa $a$:

$$
N_{\text{alto},a} =
\sum_{i \in \mathcal{D}}
\mathbf{1}\{a_i = a \land r_i \in \mathcal{R}_{\text{alto}}\}
$$

$$
p_{\text{alto}\mid a} =
\frac{N_{\text{alto},a}}{N_a}
$$

$$
\%\_{\text{alto}\mid a} = p_{\text{alto}\mid a} \cdot 100
$$

---

**JS**

    // contar total por faixa
    const totalPorFaixa = data.reduce((acc, row) => {
      const a = row.ageRange;
      acc[a] = (acc[a] || 0) + 1;
      return acc;
    }, {});

    // contar ALTO/CRITICAL por faixa
    const altoPorFaixa = data.reduce((acc, row) => {
      const a = row.ageRange;
      if (row.riskLevel === 'HIGH' || row.riskLevel === 'CRITICAL') {
        acc[a] = (acc[a] || 0) + 1;
      }
      return acc;
    }, {});

    const percAltoPorFaixa = Object.keys(totalPorFaixa).map(a => {
      const N_a      = totalPorFaixa[a];
      const N_alto_a = altoPorFaixa[a] || 0;
      const p        = N_alto_a / N_a;
      const percent  = p * 100;
      return { ageRange: a, N_a, N_alto_a, proportion: p, percent };
    });

---

**SQL**

    WITH base AS (
      SELECT
        age_range,
        risk_level
      FROM collects
    )
    SELECT
      age_range,
      COUNT(*) AS N_a,
      SUM(CASE WHEN risk_level IN ('HIGH', 'CRITICAL') THEN 1 ELSE 0 END) AS N_alto_a,
      SUM(CASE WHEN risk_level IN ('HIGH', 'CRITICAL') THEN 1 ELSE 0 END) * 1.0 / COUNT(*) AS proportion,
      SUM(CASE WHEN risk_level IN ('HIGH', 'CRITICAL') THEN 1 ELSE 0 END) * 100.0 / COUNT(*) AS percent
    FROM base
    GROUP BY age_range
    ORDER BY percent DESC;

---

## 10. Resumo mental (pra quando for codar)

- **EVERYTHING** com somatório + $\mathbf{1}\{\text{condição}\}$  
  ⇔ `COUNT(*)` com `WHERE`, ou `SUM(CASE WHEN ... THEN 1 ELSE 0 END)`.

- **Proporções e percentuais**  
  ⇔ dividir a contagem de um grupo pelo total (global ou do grupo pai).

- **Média móvel**  
  ⇔ operar em cima da série agregada por dia (JS: laço; SQL: window functions).

---

- **Taxa por 100k**  
  ⇔ `COUNT / população * 100000`, sempre juntando com uma tabela de população.

- **Score médio de risco**  
  ⇔ mapear categoria → número e fazer `AVG` ou `SUM/COUNT`.

Esse `.md` aqui já é um mini “contrato” de como o dashboard calcula tudo, com o caminho direto pra virar SQL, JS (Node/Express/Next) e qualquer outro backend.
