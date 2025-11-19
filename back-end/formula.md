# Fórmulas do Dashboard (modelo genérico)

> Arquivo “bruto” em Markdown + LaTeX para você usar depois no código / consultas.

---

## 1. Notação geral

$$
\mathcal{D} = \{1, 2, \dots, N\}
$$

$$
N = |\mathcal{D}|
$$

Cada registro \(i \in \mathcal{D}\) tem, em geral:

- \(d_i\): data/hora do registro  
- \(a_i\): faixa etária  
- \(reg_i\): região (cidade / estado / macro-região)  
- \(r_i\): nível de risco  
- \(c_i\): canal de entrada  
- \(s_i\): estado (UF)  

Indicador lógico (função característica):

$$
\mathbf{1}\{\text{condição}\} =
\begin{cases}
1, & \text{se a condição é verdadeira}\\
0, & \text{caso contrário}
\end{cases}
$$

---

## 2. Contagens básicas

### 2.1. Total de registros no período

$$
N_{\text{total}} = N = \sum_{i \in \mathcal{D}} 1
$$

### 2.2. Contagem com filtro genérico \(F\)

Exemplo de filtro: “faixa etária = 15–17 e risco = ALTO”.

$$
N(F) = \sum_{i \in \mathcal{D}} \mathbf{1}\{\text{registro } i \text{ satisfaz } F\}
$$

### 2.3. Contagem por dia

Seja \(N_{\text{dia}}(t)\) o total de registros no dia calendário \(t\):

$$
N_{\text{dia}}(t) = \sum_{i \in \mathcal{D}} \mathbf{1}\{\text{data}(d_i) = t\}
$$

### 2.4. Contagem por mês/ano

Considere funções:

- \(\text{ano}(d_i)\): ano de \(d_i\)  
- \(\text{mes}(d_i)\): mês de \(d_i\) (1 a 12)

$$
N_{\text{mes}}(y,m) =
\sum_{i \in \mathcal{D}} \mathbf{1}\{\text{ano}(d_i) = y \land \text{mes}(d_i) = m\}
$$

---

## 3. Proporções e percentuais

### 3.1. Proporção de um filtro \(F\) sobre o total

$$
p(F) = \frac{N(F)}{N_{\text{total}}}
$$

Percentual (em %):

$$
\%\,(F) = p(F) \cdot 100
$$

### 3.2. Proporção condicional \(p(F \mid G)\)

Exemplo: “proporção de ALTO risco *entre* adolescentes”.

$$
p(F \mid G) = \frac{N(F \land G)}{N(G)}
$$

onde:

$$
N(F \land G) = \sum_{i \in \mathcal{D}} 
\mathbf{1}\{\text{registro } i \text{ satisfaz } F \text{ e } G\}
$$

---

## 4. Distribuições por categoria

### 4.1. Por faixa etária

Seja \(\mathcal{A}\) o conjunto de faixas etárias (ex.: 10–14, 15–17, 18–24, …).

Contagem na faixa \(a \in \mathcal{A}\):

$$
N_a = \sum_{i \in \mathcal{D}} \mathbf{1}\{a_i = a\}
$$

Proporção / percentual:

$$
p_a = \frac{N_a}{N_{\text{total}}}
$$

$$
\%\_a = p_a \cdot 100
$$

### 4.2. Por região (cidade, estado ou macro)

Seja \(\mathcal{G}\) o conjunto de regiões (por ex., cidades):

$$
N_{g} = \sum_{i \in \mathcal{D}} \mathbf{1}\{reg_i = g\}
$$

$$
p_{g} = \frac{N_{g}}{N_{\text{total}}}
$$

$$
\%\_{g} = p_{g} \cdot 100
$$

### 4.3. Por nível de risco

Seja \(\mathcal{R}\) o conjunto de níveis de risco (ex.: BAIXO, MODERADO, ALTO, CRÍTICO).

Para \(r \in \mathcal{R}\):

$$
N_{r} = \sum_{i \in \mathcal{D}} \mathbf{1}\{r_i = r\}
$$

$$
p_{r} = \frac{N_{r}}{N_{\text{total}}}
$$

$$
\%\_{r} = p_{r} \cdot 100
$$

### 4.4. Por canal de entrada

Seja \(\mathcal{C}\) o conjunto de canais (ex.: WHATSAPP, SITE, APP, ESCOLA).

Para \(c \in \mathcal{C}\):

$$
N_{c} = \sum_{i \in \mathcal{D}} \mathbf{1}\{c_i = c\}
$$

$$
p_{c} = \frac{N_{c}}{N_{\text{total}}}
$$

$$
\%\_{c} = p_{c} \cdot 100
$$

---

## 5. Cruzamentos (tabelas dinâmicas)

### 5.1. Faixa etária × Região

Para faixa etária \(a\) e região \(g\):

$$
N_{a,g} = \sum_{i \in \mathcal{D}} \mathbf{1}\{a_i = a \land reg_i = g\}
$$

Proporção em relação ao total do dashboard:

$$
p_{a,g} = \frac{N_{a,g}}{N_{\text{total}}}
$$

Proporção de \(a\) *dentro* da região \(g\):

$$
p_{a\mid g} = \frac{N_{a,g}}{N_{g}}
$$

onde:

$$
N_g = \sum_{i \in \mathcal{D}} \mathbf{1}\{reg_i = g\}
$$

### 5.2. Risco × Faixa etária

Para risco \(r\) e faixa etária \(a\):

$$
N_{r,a} = \sum_{i \in \mathcal{D}} \mathbf{1}\{r_i = r \land a_i = a\}
$$

Percentual de \(r\) *dentro* da faixa \(a\):

$$
p_{r\mid a} = \frac{N_{r,a}}{N_{a}}
$$

onde:

$$
N_a = \sum_{i \in \mathcal{D}} \mathbf{1}\{a_i = a\}
$$

---

## 6. Séries temporais e tendências

### 6.1. Contagem diária acumulada (total até o dia \(t\))

$$
N_{\le t} = \sum_{\tau \le t} N_{\text{dia}}(\tau)
$$

### 6.2. Média móvel de 7 dias

Para um dia \(t\) (considerando que você tem dados suficientes):

$$
MM7(t) = \frac{1}{7} \sum_{k=0}^{6} N_{\text{dia}}(t - k)
$$

### 6.3. Média móvel de 30 dias

$$
MM30(t) = \frac{1}{30} \sum_{k=0}^{29} N_{\text{dia}}(t - k)
$$

### 6.4. Variação percentual mensal

Variação de \(N_{\text{mes}}(y,m)\) em relação ao mês anterior:

$$
\Delta_{\text{mes}\%}(y,m) =
\frac{N_{\text{mes}}(y,m) - N_{\text{mes}}(y,m-1)}
     {N_{\text{mes}}(y,m-1)}
\cdot 100
$$

(Tratar o caso em que \(N_{\text{mes}}(y,m-1) = 0\) separadamente no código.)

### 6.5. Variação percentual anual (mesmo mês, ano anterior)

$$
\Delta_{\text{ano}\%}(y,m) =
\frac{N_{\text{mes}}(y,m) - N_{\text{mes}}(y-1,m)}
     {N_{\text{mes}}(y-1,m)}
\cdot 100
$$

---

## 7. Normalização por população (por 100 mil habitantes)

Se você tiver a população \(Pop(g)\) para cada região \(g\):

### 7.1. Taxa por 100.000 habitantes em uma região

Seja \(N_{g}\) o número de registros na região \(g\):

$$
\text{Taxa\_100k}(g) = \frac{N_{g}}{Pop(g)} \cdot 100000
$$

### 7.2. Taxa por 100.000 por faixa etária em uma região

Seja \(Pop(g,a)\) a população da faixa etária \(a\) na região \(g\), e \(N_{g,a}\) a contagem de registros:

$$
\text{Taxa\_100k}(g,a) = \frac{N_{g,a}}{Pop(g,a)} \cdot 100000
$$

---

## 8. Índices de risco numéricos

Suponha que você atribua um score numérico para cada nível de risco:

- \(score(\text{BAIXO}) = s_{\text{baixo}}\)  
- \(score(\text{MODERADO}) = s_{\text{moderado}}\)  
- \(score(\text{ALTO}) = s_{\text{alto}}\)  
- \(score(\text{CRÍTICO}) = s_{\text{crítico}}\)

### 8.1. Score médio de risco global

$$
\bar{R} = \frac{1}{N_{\text{total}}}
\sum_{i \in \mathcal{D}} score(r_i)
$$

### 8.2. Score médio de risco por região

$$
\bar{R}_{g} = 
\frac{1}{N_{g}} \sum_{i \in \mathcal{D}}
score(r_i) \cdot \mathbf{1}\{reg_i = g\}
$$

onde:

$$
N_g = \sum_{i \in \mathcal{D}} \mathbf{1}\{reg_i = g\}
$$

### 8.3. Score médio por faixa etária

$$
\bar{R}_{a} = 
\frac{1}{N_{a}} \sum_{i \in \mathcal{D}}
score(r_i) \cdot \mathbf{1}\{a_i = a\}
$$

---

## 9. Foco em “alto risco” e “risco crítico”

Seja \(\mathcal{R}_{\text{alto}}\) o conjunto de níveis considerados “preocupantes”, por exemplo:

$$
\mathcal{R}_{\text{alto}} = \{\text{ALTO}, \text{CRÍTICO}\}
$$

### 9.1. Contagem e percentual de casos de maior risco

$$
N_{\text{alto}} = \sum_{i \in \mathcal{D}} 
\mathbf{1}\{r_i \in \mathcal{R}_{\text{alto}}\}
$$

$$
p_{\text{alto}} = \frac{N_{\text{alto}}}{N_{\text{total}}}
$$

$$
\%\_{\text{alto}} = p_{\text{alto}} \cdot 100
$$

### 9.2. Percentual de alto risco por faixa etária

Para uma faixa etária \(a\):

$$
N_{\text{alto},a} = \sum_{i \in \mathcal{D}} 
\mathbf{1}\{r_i \in \mathcal{R}_{\text{alto}} \land a_i = a\}
$$

$$
p_{\text{alto}\mid a} = \frac{N_{\text{alto},a}}{N_a}
$$

$$
\%\_{\text{alto}\mid a} = p_{\text{alto}\mid a} \cdot 100
$$

---

## 10. Exemplo de filtros típicos (para implementar no código)

> As fórmulas abaixo servem como “templates” de contagens para cards e gráficos.

### 10.1. Total no período selecionado

Filtro \(F =\) “data entre \(d_{\text{inicio}}\) e \(d_{\text{fim}}\)”:

$$
N_{\text{período}} =
\sum_{i \in \mathcal{D}}
\mathbf{1}\{d_{\text{inicio}} \le d_i \le d_{\text{fim}}\}
$$

### 10.2. Total por UF

Filtro \(F =\) “UF = \(s\)”:

$$
N_{s} =
\sum_{i \in \mathcal{D}}
\mathbf{1}\{s_i = s\}
$$

### 10.3. Total por UF e risco alto

Filtro \(F =\) “UF = \(s\) e risco \(\in \mathcal{R}_{\text{alto}}\)”:

$$
N_{s,\text{alto}} =
\sum_{i \in \mathcal{D}}
\mathbf{1}\{s_i = s \land r_i \in \mathcal{R}_{\text{alto}}\}
$$

Percentual de alto risco naquela UF:

$$
p_{\text{alto}\mid s} = \frac{N_{s,\text{alto}}}{N_s}
$$

$$
\%\_{\text{alto}\mid s} = p_{\text{alto}\mid s} \cdot 100
$$

---

## 11. Agregação para gráficos de linha, barras e pizza

### 11.1. Gráfico de linha (por dia)

Pontos do gráfico:

- eixo \(x\): dia \(t\)  
- eixo \(y\): \(N_{\text{dia}}(t)\) ou \(MM7(t)\)

$$
(t, N_{\text{dia}}(t)) \quad \text{ou} \quad (t, MM7(t))
$$

### 11.2. Gráfico de barras (por categoria)

Exemplo: barras para cada faixa etária \(a\):

- eixo \(x\): faixas \(a\)  
- eixo \(y\): \(N_a\) ou \(\%\_a\)

$$
(a, N_a) \quad \text{ou} \quad (a, \%\_a)
$$

### 11.3. Gráfico de pizza (percentual por categoria)

Exemplo: distribuição de risco:

- fatias: cada nível \(r \in \mathcal{R}\)  
- valor da fatia: \(\%\_r\)

$$
\%\_r = \frac{N_r}{N_{\text{total}}} \cdot 100
$$

---

## 12. Resumo rápido das principais fórmulas (para consulta)

### 12.1. Contagem com filtro genérico

$$
N(F) = \sum_{i \in \mathcal{D}} \mathbf{1}\{\text{registro } i \text{ satisfaz } F\}
$$

### 12.2. Proporção simples

$$
p(F) = \frac{N(F)}{N_{\text{total}}}
$$

### 12.3. Proporção condicional

$$
p(F \mid G) = \frac{N(F \land G)}{N(G)}
$$

### 12.4. Média móvel de 7 dias

$$
MM7(t) = \frac{1}{7} \sum_{k=0}^{6} N_{\text{dia}}(t - k)
$$

### 12.5. Variação percentual mensal

$$
\Delta_{\text{mes}\%}(y,m) =
\frac{N_{\text{mes}}(y,m) - N_{\text{mes}}(y,m-1)}
     {N_{\text{mes}}(y,m-1)} \cdot 100
$$

### 12.6. Taxa por 100.000 habitantes

$$
\text{Taxa\_100k}(g) = \frac{N_{g}}{Pop(g)} \cdot 100000
$$

### 12.7. Score médio de risco

$$
\bar{R} = \frac{1}{N_{\text{total}}}
\sum_{i \in \mathcal{D}} score(r_i)
$$

---
