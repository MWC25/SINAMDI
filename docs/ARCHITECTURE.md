# Arquitetura Proposta - SINAMDI (MVP)

## 📐 Visão Geral da Arquitetura

O SINAMDI seguirá uma arquitetura simplificada de três camadas para o MVP, priorizando funcionalidade sobre complexidade. A arquitetura poderá evoluir para microserviços em versões futuras.

> **⚠️ MVP:** Esta arquitetura representa uma versão inicial simplificada. Tecnologias e padrões foram escolhidos para acelerar o desenvolvimento, com MySQL como banco de dados principal e arquitetura monolítica modular.

```
┌─────────────────────────────────────────────────────────────────┐
│                         CAMADA DE APRESENTAÇÃO                    │
├─────────────────────────────────────────────────────────────────┤
│  Portal Público    │  Portal Institucional  │  Portal Vítimas   │
│     (React)        │        (React)         │     (React)       │
└────────────┬───────────────────┬──────────────────┬─────────────┘
             │                   │                  │
             └───────────────────┼──────────────────┘
                                 │
                          [API Gateway]
                                 │
┌────────────────────────────────┴─────────────────────────────────┐
│                   CAMADA DE APLICAÇÃO (MVP)                       │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│            ┌─────────────────────────────────┐                   │
│            │   Backend Monolítico Modular    │                   │
│            │         (Node.js/Express)       │                   │
│            │                                 │                   │
│            │  • Auth Module                  │                   │
│            │  • Data Collection Module       │                   │
│            │  • Analytics Module             │                   │
│            │  • Reports Module               │                   │
│            │  • Portal Module                │                   │
│            └─────────────────────────────────┘                   │
│                                                                   │
└────────────────────────────┬─────────────────────────────────────┘
                             │
                      [Cache Opcional]
                             │
┌────────────────────────────┴─────────────────────────────────────┐
│                        CAMADA DE DADOS (MVP)                      │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌────────────┐  ┌──────────────┐  ┌────────────┐              │
│  │   MySQL    │  │    Redis     │  │   Local    │              │
│  │ (Principal)│  │  (Opcional)  │  │  Storage   │              │
│  └────────────┘  └──────────────┘  └────────────┘              │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

## 🏗️ Componentes Principais

### 1. Frontend (Camada de Apresentação)

> **MVP:** Portais serão desenvolvidos com React puro, sem SSR inicialmente. PWA será implementado em versão futura.

#### 1.1 Portal Público
**Tecnologia:** React + JavaScript/TypeScript
**Responsabilidades:**
- Exibição de estatísticas públicas
- Materiais educativos básicos
- Informações sobre o programa
- Acesso sem login

**Características (MVP):**
- SPA (Single Page Application)
- Sem necessidade de autenticação
- Design responsivo básico
- SEO básico com meta tags

#### 1.2 Portal Institucional
**Tecnologia:** React + Material-UI ou Ant Design
**Responsabilidades:**
- Login e gestão de instituições
- Cadastro de casos
- Visualização de estatísticas básicas
- Exportação simples (CSV)

**Características (MVP):**
- SPA (Single Page Application)
- Autenticação JWT
- Permissões básicas por tipo de usuário
- Interface responsiva

#### 1.3 Portal para Vítimas
**Tecnologia:** React + Material-UI
**Responsabilidades:**
- Formulários de autoavaliação
- Consentimento informado
- Recursos de apoio

**Características (MVP):**
- Interface simples e acolhedora
- Máxima privacidade
- Formulários progressivos
- Design mobile-first

### 2. Backend (Camada de Aplicação)

> **MVP:** Backend será um monólito modular em Node.js, permitindo desenvolvimento mais rápido. Pode ser dividido em microserviços posteriormente.

#### 2.1 Authentication Module
**Tecnologia:** Node.js + Express + JWT
**Responsabilidades:**
- Autenticação de usuários
- Gerenciamento de sessões via JWT
- Controle de acesso básico

**Endpoints principais:**
```
POST   /api/auth/login
POST   /api/auth/logout
POST   /api/auth/register
GET    /api/auth/me
```

#### 2.2 Data Collection Module
**Tecnologia:** Node.js + Express + Sequelize/TypeORM
**Responsabilidades:**
- Recebimento de autoavaliações
- Cadastro de casos institucionais
- Validação de dados
- Anonimização
- Armazenamento seguro

**Endpoints principais:**
```
POST   /api/data/self-assessment
POST   /api/data/institutional-case
GET    /api/data/cases
PUT    /api/data/cases/:id
DELETE /api/data/cases/:id
```

#### 2.3 Analytics Module
**Tecnologia:** Node.js + Express (MVP - simplificado)
**Responsabilidades:**
- Cálculo de estatísticas básicas
- Agregações regionais simples
- Contadores e métricas essenciais

**Endpoints principais:**
```
GET    /api/analytics/summary
GET    /api/analytics/by-region
GET    /api/analytics/by-age-group
```

#### 2.4 Reports Module
**Tecnologia:** Node.js + Express
**Responsabilidades:**
- Geração de relatórios básicos
- Exportação CSV
- Relatórios pré-definidos

**Endpoints principais:**
```
GET    /api/reports/summary
POST   /api/reports/export
```

#### 2.5 Portal Module
**Tecnologia:** Node.js + Express
**Responsabilidades:**
- Conteúdo educativo
- FAQ
- Informações públicas

GET    /api/portal/resources
GET    /api/portal/faq
```

### 3. Banco de Dados (Camada de Dados)

> **MVP:** Utilizaremos MySQL como banco de dados principal, com estrutura simplificada.

#### 3.1 MySQL (Banco Principal)
**Versão:** MySQL 8.0+

**Esquemas principais:**

```sql
-- Usuários e Autenticação
users
  - id (INT AUTO_INCREMENT)
  - email (VARCHAR(255))
  - password_hash (VARCHAR(255))
  - role (ENUM: admin, institution, public)
  - created_at (TIMESTAMP)
  - updated_at (TIMESTAMP)

-- Instituições
institutions
  - id (INT AUTO_INCREMENT)
  - name (VARCHAR(255))
  - cnpj (VARCHAR(18))
  - type (VARCHAR(100))
  - address (TEXT)
  - contact (VARCHAR(255))
  - user_id (INT, FK)
  - created_at (TIMESTAMP)

-- Casos Institucionais
institutional_cases
  - id (INT AUTO_INCREMENT)
  - institution_id (INT, FK)
  - anonymous_id (VARCHAR(64) - hash)
  - age_group (VARCHAR(50))
  - gender (VARCHAR(20))
  - region (VARCHAR(100))
  - severity_level (INT)
  - status (VARCHAR(50))
  - created_at (TIMESTAMP)
  - updated_at (TIMESTAMP)

-- Autoavaliações
self_assessments
  - id (INT AUTO_INCREMENT)
  - anonymous_id (VARCHAR(64) - hash)
  - age_group (VARCHAR(50))
  - gender (VARCHAR(20))
  - region (VARCHAR(100))
  - responses (JSON)
  - risk_score (INT)
  - created_at (TIMESTAMP)

-- Estatísticas Agregadas (para cache de consultas)
regional_stats
  - id (INT AUTO_INCREMENT)
  - region (VARCHAR(100))
  - state (VARCHAR(50))
  - city (VARCHAR(100))
  - total_cases (INT)
  - period_start (DATE)
  - period_end (DATE)
  - updated_at (TIMESTAMP)
```

#### 3.2 Redis (Cache - Opcional no MVP)
**Uso (se implementado):**
- Cache de estatísticas calculadas
- Rate limiting
- Sessões temporárias

#### 3.3 Local Storage (Arquivos - MVP)
**Uso:**
- Materiais educativos (PDFs, imagens)
- Arquivos estáticos
- Uploads temporários

> **Nota MVP:** MongoDB e S3 não serão usados inicialmente. Logs serão armazenados em arquivo ou tabela MySQL. Storage de arquivos será local ou diretório compartilhado.

## 🔒 Segurança

> **MVP:** Foco em segurança essencial. Recursos avançados serão implementados em versões futuras.

### Camadas de Segurança (MVP)

1. **Application Layer**
   - Input validation
   - SQL injection prevention
   - XSS protection
   - CSRF tokens

3. **Data Layer**
   - Encryption at rest
   - Encryption in transit (TLS 1.3)
   - Anonimização de dados sensíveis
   - Backup criptografado

4. **Authentication & Authorization**
   - JWT com refresh tokens
   - OAuth2 para integrações
   - MFA (Multi-Factor Auth)
   - RBAC granular

### LGPD Compliance

1. **Consentimento**
   - Formulários claros de consentimento
   - Opt-in explícito
   - Revogação facilitada

2. **Anonimização**
   - Hash irreversível de identificadores
   - Dados agregados não rastreáveis
   - Minimização de dados coletados

3. **Direitos dos Titulares**
   - Acesso aos dados
   - Correção de dados
   - Exclusão de dados (direito ao esquecimento)
   - Portabilidade

4. **Auditoria**
   - Logs de acesso a dados sensíveis
   - Trilha de consentimentos
   - Relatórios de conformidade

## 📊 Escalabilidade

### Estratégias

1. **Horizontal Scaling**
   - Load balancers
   - Multiple API instances
   - Database replication

2. **Caching Strategy**
   - Redis para queries frequentes
   - CDN para assets estáticos
   - Browser caching

3. **Database Optimization**
   - Indexes estratégicos
   - Particionamento de tabelas
   - Read replicas
   - Connection pooling

4. **Asynchronous Processing**
   - Message queues para tarefas pesadas
   - Background jobs
   - Event-driven architecture

## 🚀 DevOps e Deploy

### CI/CD Pipeline

```
Developer Push → GitHub
    ↓
GitHub Actions triggered
    ↓
Run Tests (Unit + Integration)
    ↓
Build Docker Images
    ↓
Security Scan
    ↓
Deploy to Staging
    ↓
Automated E2E Tests
    ↓
Manual Approval
    ↓
Deploy to Production (Blue-Green)
    ↓
Health Checks
    ↓
Monitoring Activated
```

### Containerização

```dockerfile
# Exemplo simplificado
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

### Monitoramento

**Ferramentas:**
- Prometheus (métricas)
- Grafana (visualização)
- ELK Stack (logs)
- Sentry (error tracking)
- Uptime Robot (availability)

**Métricas Chave:**
- Request rate
- Error rate
- Response time (p50, p95, p99)
- Database query time
- Cache hit rate
- Memory/CPU usage

## 🌐 Infraestrutura Cloud

### Opção 1: AWS
- EC2 / ECS / EKS (compute)
- RDS (PostgreSQL)
- ElastiCache (Redis)
- S3 (storage)
- CloudFront (CDN)
- Route53 (DNS)
- WAF (firewall)

### Opção 2: Google Cloud
- GKE (Kubernetes)
- Cloud SQL
- Memorystore
- Cloud Storage
- Cloud CDN
- Cloud DNS

### Opção 3: Azure
- AKS (Kubernetes)
- Azure Database
- Azure Cache
- Blob Storage
- Azure CDN
- Azure DNS

## 📱 APIs e Integrações

### API Gateway Features
- Rate limiting
- Request/Response transformation
- API versioning
- Documentation (Swagger/OpenAPI)
- API keys management

### Webhooks
- Notificações de novos casos
- Atualizações de estatísticas
- Alertas de sistema

## 🧪 Testes

### Estratégia de Testes

1. **Unit Tests** (>80% coverage)
   - Jest para JavaScript/TypeScript
   - Pytest para Python

2. **Integration Tests**
   - Testes de API
   - Testes de banco de dados

3. **E2E Tests**
   - Cypress ou Playwright
   - Scenarios críticos

4. **Performance Tests**
   - k6 ou Artillery
   - Load testing

5. **Security Tests**
   - OWASP ZAP
   - Dependency scanning
   - Penetration testing

---

**Nota:** Esta arquitetura é uma proposta inicial e deve ser refinada durante a fase de design detalhado do projeto.
