# Arquitetura Proposta - SINAMDI

## 📐 Visão Geral da Arquitetura

O SINAMDI seguirá uma arquitetura moderna de três camadas com microserviços, garantindo escalabilidade, manutenibilidade e segurança.

```
┌─────────────────────────────────────────────────────────────────┐
│                         CAMADA DE APRESENTAÇÃO                    │
├─────────────────────────────────────────────────────────────────┤
│  Portal Público    │  Portal Institucional  │  Portal Vítimas   │
│  (Next.js/React)   │     (React/Admin)      │  (React/PWA)      │
└────────────┬───────────────────┬──────────────────┬─────────────┘
             │                   │                  │
             └───────────────────┼──────────────────┘
                                 │
                          [API Gateway]
                          [Load Balancer]
                                 │
┌────────────────────────────────┴─────────────────────────────────┐
│                        CAMADA DE APLICAÇÃO                        │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────────┐  ┌──────────────┐  ┌────────────────┐        │
│  │   Auth API   │  │   Data API   │  │  Analytics API │        │
│  │  (Node.js)   │  │  (Node.js)   │  │   (Python)     │        │
│  └──────────────┘  └──────────────┘  └────────────────┘        │
│                                                                   │
│  ┌──────────────┐  ┌──────────────┐  ┌────────────────┐        │
│  │ Reports API  │  │  Portal API  │  │  Notif. API    │        │
│  │  (Node.js)   │  │  (Node.js)   │  │   (Node.js)    │        │
│  └──────────────┘  └──────────────┘  └────────────────┘        │
│                                                                   │
└────────────────────────────┬─────────────────────────────────────┘
                             │
                    [Message Queue]
                      [Redis Cache]
                             │
┌────────────────────────────┴─────────────────────────────────────┐
│                        CAMADA DE DADOS                            │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌────────────┐  ┌──────────────┐  ┌────────────┐              │
│  │ PostgreSQL │  │    Redis     │  │  MongoDB   │              │
│  │  (Principal)│  │   (Cache)    │  │  (Logs)    │              │
│  └────────────┘  └──────────────┘  └────────────┘              │
│                                                                   │
│  ┌────────────┐  ┌──────────────┐                               │
│  │ S3/Storage │  │  TimeSeries  │                               │
│  │  (Arquivos)│  │  (Métricas)  │                               │
│  └────────────┘  └──────────────┘                               │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

## 🏗️ Componentes Principais

### 1. Frontend (Camada de Apresentação)

#### 1.1 Portal Público
**Tecnologia:** Next.js (React) + TypeScript
**Responsabilidades:**
- Exibição de estatísticas públicas
- Materiais educativos
- Blog de conscientização
- Campanhas de divulgação
- SEO otimizado

**Características:**
- SSR (Server-Side Rendering)
- Sem necessidade de autenticação
- PWA para acesso offline
- Alta performance (Lighthouse >90)

#### 1.2 Portal Institucional
**Tecnologia:** React + TypeScript + Ant Design
**Responsabilidades:**
- Login e gestão de instituições
- Cadastro e acompanhamento de casos
- Geração de relatórios
- Dashboard administrativo
- Exportação de dados

**Características:**
- SPA (Single Page Application)
- Autenticação obrigatória
- RBAC (Role-Based Access Control)
- Interface rica e responsiva

#### 1.3 Portal para Vítimas
**Tecnologia:** React + TypeScript + Material-UI
**Responsabilidades:**
- Formulários de autoavaliação
- Consentimento informado
- Acompanhamento anônimo
- Recursos de apoio

**Características:**
- PWA instalável
- Máxima privacidade
- Interface simples e acolhedora
- Acessibilidade prioritária

### 2. Backend (Camada de Aplicação)

#### 2.1 Authentication Service
**Tecnologia:** Node.js + Express + JWT
**Responsabilidades:**
- Autenticação de usuários
- Gerenciamento de sessões
- OAuth2 / OpenID Connect
- Controle de acesso (RBAC)

**Endpoints principais:**
```
POST   /api/auth/login
POST   /api/auth/logout
POST   /api/auth/refresh
POST   /api/auth/register
GET    /api/auth/me
```

#### 2.2 Data Collection Service
**Tecnologia:** Node.js + Express + Prisma
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

#### 2.3 Analytics Service
**Tecnologia:** Python + FastAPI + Pandas
**Responsabilidades:**
- Processamento de dados
- Cálculo de estatísticas
- Agregações regionais
- Índices de risco
- Métricas de recuperação

**Endpoints principais:**
```
GET    /api/analytics/regional
GET    /api/analytics/age-groups
GET    /api/analytics/risk-levels
GET    /api/analytics/recovery-rates
GET    /api/analytics/trends
```

#### 2.4 Reports Service
**Tecnologia:** Node.js + Express
**Responsabilidades:**
- Geração de relatórios
- Exportação (PDF, Excel, CSV)
- Agendamento de relatórios
- Templates personalizados

**Endpoints principais:**
```
POST   /api/reports/generate
GET    /api/reports/:id
GET    /api/reports/scheduled
POST   /api/reports/export
```

#### 2.5 Portal Service
**Tecnologia:** Node.js + Express
**Responsabilidades:**
- Conteúdo educativo
- Gerenciamento de campanhas
- Notícias e blog
- FAQ

**Endpoints principais:**
```
GET    /api/portal/content
GET    /api/portal/campaigns
GET    /api/portal/resources
GET    /api/portal/blog
```

#### 2.6 Notification Service
**Tecnologia:** Node.js + Bull Queue
**Responsabilidades:**
- Envio de emails
- Notificações push
- SMS (opcional)
- Alertas de sistema

### 3. Banco de Dados (Camada de Dados)

#### 3.1 PostgreSQL (Banco Principal)
**Esquemas principais:**

```sql
-- Usuários e Autenticação
users
  - id (UUID)
  - email
  - password_hash
  - role (admin, institution, public)
  - created_at
  - updated_at

-- Instituições
institutions
  - id (UUID)
  - name
  - cnpj
  - type
  - address
  - contact
  - user_id (FK)
  - created_at

-- Casos Institucionais
institutional_cases
  - id (UUID)
  - institution_id (FK)
  - anonymous_id (hash)
  - age_group
  - gender
  - region
  - severity_level
  - status
  - created_at
  - updated_at

-- Autoavaliações
self_assessments
  - id (UUID)
  - anonymous_id (hash)
  - age_group
  - gender
  - region
  - responses (JSONB)
  - risk_score
  - created_at

-- Estatísticas Agregadas
regional_stats
  - id (UUID)
  - region
  - state
  - city
  - total_cases
  - risk_distribution
  - recovery_rate
  - period_start
  - period_end
  - updated_at
```

#### 3.2 Redis (Cache e Sessões)
**Uso:**
- Cache de estatísticas
- Sessões de usuário
- Rate limiting
- Filas de processamento

#### 3.3 MongoDB (Logs e Auditoria)
**Coleções:**
- audit_logs
- application_logs
- user_activities

#### 3.4 S3-Compatible Storage
**Uso:**
- Uploads de arquivos
- Relatórios gerados
- Materiais educativos
- Backups

## 🔒 Segurança

### Camadas de Segurança

1. **Network Layer**
   - Firewall
   - DDoS protection
   - Rate limiting

2. **Application Layer**
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
