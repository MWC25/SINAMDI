# Guia de Início Rápido - SINAMDI

## 🚀 Como Começar a Desenvolver

Este guia ajudará desenvolvedores a iniciarem o desenvolvimento do SINAMDI.

## ⚠️ Estado Atual do Projeto

**IMPORTANTE:** O projeto está em estágio muito inicial. Atualmente, existe apenas:
- Estrutura básica de pastas
- Documentação de planejamento

**NÃO existe código funcional ainda.** Este guia serve para orientar o desenvolvimento futuro.

---

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado:

### Ferramentas Essenciais
- **Git** (>= 2.30)
- **Node.js** (>= 18.x) e **npm** (>= 9.x)
- **Python** (>= 3.10) - para serviços de analytics
- **Docker** (>= 20.x) e **Docker Compose** (>= 2.x)
- **PostgreSQL** (>= 14.x) - ou via Docker
- **Redis** (>= 7.x) - ou via Docker

### IDEs Recomendados
- **Visual Studio Code** com extensões:
  - ESLint
  - Prettier
  - Docker
  - GitLens
  - REST Client
- **JetBrains WebStorm** (alternativa)
- **PyCharm** (para código Python)

### Conhecimentos Recomendados
- JavaScript/TypeScript
- React.js
- Node.js e Express
- SQL e bancos relacionais
- API REST
- Git e GitHub
- Docker básico

---

## 🏗️ Estrutura do Projeto (Futura)

```
SINAMDI/
├── back-end/
│   ├── auth-service/         # Serviço de autenticação
│   ├── data-service/         # Serviço de coleta de dados
│   ├── analytics-service/    # Serviço de análise (Python)
│   ├── reports-service/      # Serviço de relatórios
│   ├── portal-service/       # Serviço do portal público
│   ├── notification-service/ # Serviço de notificações
│   ├── shared/               # Código compartilhado
│   └── docker-compose.yml    # Orquestração local
│
├── front-end/
│   ├── public-portal/        # Portal público (Next.js)
│   ├── institutional-panel/  # Painel institucional (React)
│   ├── victim-portal/        # Portal para vítimas (React PWA)
│   ├── admin-panel/          # Painel administrativo
│   └── shared/               # Componentes compartilhados
│
├── docs/
│   ├── README.md
│   ├── ROADMAP.md
│   ├── ARCHITECTURE.md
│   ├── FEATURES_STATUS.md
│   ├── CONTRIBUTING.md       # A criar
│   └── API.md                # A criar
│
├── infra/
│   ├── kubernetes/           # A criar
│   ├── terraform/            # A criar
│   └── scripts/              # Scripts de deploy
│
├── tests/
│   ├── e2e/                  # Testes end-to-end
│   └── performance/          # Testes de performance
│
├── .github/
│   └── workflows/            # GitHub Actions
│
├── .gitignore
├── README.md
└── docker-compose.yml        # Ambiente completo local
```

---

## 🛠️ Setup do Ambiente de Desenvolvimento

### 1. Clone o Repositório

```bash
git clone https://github.com/MWC25/SINAMDI.git
cd SINAMDI
```

### 2. Configure as Variáveis de Ambiente

```bash
# Backend
cp back-end/.env.example back-end/.env
# Edite back-end/.env com suas configurações

# Frontend
cp front-end/.env.example front-end/.env
# Edite front-end/.env com suas configurações
```

### 3. Inicie os Serviços com Docker (Recomendado)

```bash
# Inicia todos os serviços (banco, cache, APIs, frontend)
docker-compose up -d

# Verificar status
docker-compose ps

# Ver logs
docker-compose logs -f
```

### 4. OU Configure Manualmente

#### Backend (Node.js)

```bash
cd back-end/auth-service
npm install
npm run dev
```

#### Frontend

```bash
cd front-end/public-portal
npm install
npm run dev
```

#### Analytics (Python)

```bash
cd back-end/analytics-service
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### 5. Inicialize o Banco de Dados

```bash
# Execute as migrations
cd back-end
npm run db:migrate

# (Opcional) Popule com dados de teste
npm run db:seed
```

---

## 🧪 Executando Testes

### Testes Unitários

```bash
# Backend
cd back-end
npm test

# Frontend
cd front-end/public-portal
npm test
```

### Testes de Integração

```bash
cd back-end
npm run test:integration
```

### Testes E2E

```bash
npm run test:e2e
```

### Coverage

```bash
npm run test:coverage
```

---

## 📝 Padrões de Código

### Formatação

O projeto usa **Prettier** para formatação automática:

```bash
npm run format
```

### Linting

O projeto usa **ESLint** para linting:

```bash
npm run lint
npm run lint:fix  # Corrige automaticamente
```

### Commits

Seguimos o padrão **Conventional Commits**:

```
feat: adiciona formulário de autoavaliação
fix: corrige cálculo de índice de risco
docs: atualiza documentação da API
test: adiciona testes para analytics service
refactor: melhora estrutura do código
style: formata código
chore: atualiza dependências
```

---

## 🔀 Workflow de Desenvolvimento

### 1. Crie uma Branch

```bash
git checkout -b feature/nome-da-feature
# ou
git checkout -b fix/nome-do-bug
```

### 2. Desenvolva

```bash
# Faça suas alterações
# Teste localmente
npm test
npm run lint
```

### 3. Commit

```bash
git add .
git commit -m "feat: descrição da mudança"
```

### 4. Push e Pull Request

```bash
git push origin feature/nome-da-feature
# Abra um Pull Request no GitHub
```

### 5. Code Review

Aguarde aprovação de pelo menos 1 revisor antes de fazer merge.

---

## 🐳 Docker Commands Úteis

```bash
# Rebuild completo
docker-compose up --build

# Parar todos os serviços
docker-compose down

# Parar e remover volumes (cuidado!)
docker-compose down -v

# Ver logs de um serviço específico
docker-compose logs -f auth-service

# Executar comando em um container
docker-compose exec auth-service npm run db:migrate

# Acessar shell de um container
docker-compose exec auth-service sh
```

---

## 📊 Acessando os Serviços Localmente

Quando o ambiente estiver configurado, os serviços estarão disponíveis em:

- **Portal Público:** http://localhost:3000
- **Painel Institucional:** http://localhost:3001
- **Portal Vítimas:** http://localhost:3002
- **Admin Panel:** http://localhost:3003
- **API Gateway:** http://localhost:4000
- **Auth API:** http://localhost:4001
- **Data API:** http://localhost:4002
- **Analytics API:** http://localhost:4003
- **PostgreSQL:** localhost:5432
- **Redis:** localhost:6379
- **Swagger Docs:** http://localhost:4000/docs

---

## 🆘 Problemas Comuns

### Porta já em uso

```bash
# Linux/Mac
lsof -ti:3000 | xargs kill

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Problemas com Node Modules

```bash
rm -rf node_modules package-lock.json
npm install
```

### Problemas com Docker

```bash
docker system prune -a
docker-compose down -v
docker-compose up --build
```

### Banco de dados não inicializa

```bash
docker-compose down -v
docker volume rm sinamdi_postgres_data
docker-compose up -d postgres
# Aguarde ~30 segundos
npm run db:migrate
```

---

## 📚 Recursos Adicionais

### Documentação
- [Roadmap Completo](./ROADMAP.md)
- [Arquitetura do Sistema](./ARCHITECTURE.md)
- [Status de Features](./FEATURES_STATUS.md)

### Tutoriais Recomendados
- [React Documentation](https://react.dev/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [PostgreSQL Tutorial](https://www.postgresql.org/docs/)
- [Docker Getting Started](https://docs.docker.com/get-started/)

### Ferramentas Úteis
- [Postman](https://www.postman.com/) - Teste de APIs
- [DBeaver](https://dbeaver.io/) - Cliente de banco de dados
- [Redux DevTools](https://github.com/reduxjs/redux-devtools) - Debug React

---

## 🤝 Como Contribuir

1. Fork o repositório
2. Crie sua feature branch
3. Faça commit das mudanças
4. Push para a branch
5. Abra um Pull Request

Para mais detalhes, veja [CONTRIBUTING.md](./CONTRIBUTING.md) (a ser criado).

---

## 📞 Suporte

- **Issues:** [GitHub Issues](https://github.com/MWC25/SINAMDI/issues)
- **Discussões:** [GitHub Discussions](https://github.com/MWC25/SINAMDI/discussions)
- **Email:** (a definir)

---

## 📝 Licença

(A definir - sugestão: MIT ou GPL-3.0 para projeto governamental)

---

**Última atualização:** Novembro 2025  
**Versão:** 1.0
