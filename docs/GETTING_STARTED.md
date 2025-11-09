# Guia de Início Rápido - SINAMDI (MVP)

## 🚀 Como Começar a Desenvolver

Este guia ajudará desenvolvedores a iniciarem o desenvolvimento do SINAMDI.

## ⚠️ Estado Atual do Projeto

**IMPORTANTE:** O projeto está em estágio muito inicial. Atualmente, existe apenas:
- Estrutura básica de pastas
- Documentação de planejamento

**NÃO existe código funcional ainda.** Este guia serve para orientar o desenvolvimento futuro.

> **MVP:** Este projeto será desenvolvido como MVP com escopo reduzido e tecnologias simplificadas.

---

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado:

### Ferramentas Essenciais (MVP)
- **Git** (>= 2.30)
- **Node.js** (>= 18.x) e **npm** (>= 9.x)
- **MySQL** (>= 8.0) - ou via Docker
- **Docker** (>= 20.x) - opcional
- **Redis** (opcional para cache)

### IDEs Recomendados
- **Visual Studio Code** com extensões:
  - ESLint
  - Prettier
  - MySQL (para gerenciar o banco)
  - GitLens
  - REST Client
- **JetBrains WebStorm** (alternativa)

### Conhecimentos Recomendados
- JavaScript/TypeScript básico
- React.js
- Node.js e Express
- **MySQL** e SQL básico
- API REST
- Git e GitHub

---

## 🏗️ Estrutura do Projeto (MVP)

```
SINAMDI/
├── back-end/
│   ├── src/
│   │   ├── modules/
│   │   │   ├── auth/           # Módulo de autenticação
│   │   │   ├── data/           # Módulo de coleta de dados
│   │   │   ├── analytics/      # Módulo de análise
│   │   │   ├── reports/        # Módulo de relatórios
│   │   │   └── portal/         # Módulo do portal
│   │   ├── config/             # Configurações
│   │   ├── middleware/         # Middlewares
│   │   └── utils/              # Utilitários
│   ├── migrations/             # Migrações do banco
│   ├── package.json
│   └── .env.example
│
├── front-end/
│   ├── public-portal/          # Portal público (React)
│   ├── institutional-panel/    # Painel institucional (React)
│   ├── victim-portal/          # Portal para vítimas (React)
│   └── shared/                 # Componentes compartilhados
│
├── docs/
│   ├── README.md
│   ├── ROADMAP.md
│   ├── ARCHITECTURE.md
│   ├── FEATURES_STATUS.md
│   └── API.md                  # A criar
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

### 3. Inicie o Banco de Dados

#### Com Docker (Recomendado)

```bash
# MySQL com Docker
docker run --name sinamdi-mysql \
  -e MYSQL_ROOT_PASSWORD=root123 \
  -e MYSQL_DATABASE=sinamdi \
  -p 3306:3306 \
  -d mysql:8.0
```

#### Ou instale MySQL localmente
Consulte: https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/

### 4. Configure Manualmente

#### Backend (Node.js)

```bash
cd back-end
npm install
npm run dev
```

#### Frontend

```bash
cd front-end/public-portal
npm install
npm start
```

### 5. Inicialize o Banco de Dados

```bash
# Execute as migrations
cd back-end
npm run migrate

# (Opcional) Popule com dados de teste
npm run seed
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

## 🐳 Docker Commands Úteis (MySQL)

```bash
# Ver logs do MySQL
docker logs sinamdi-mysql

# Acessar MySQL shell
docker exec -it sinamdi-mysql mysql -u root -p

# Parar container
docker stop sinamdi-mysql

# Remover container (cuidado!)
docker rm sinamdi-mysql

# Backup do banco
docker exec sinamdi-mysql mysqldump -u root -proot123 sinamdi > backup.sql
```

---

## 📊 Acessando os Serviços Localmente (MVP)

Quando o ambiente estiver configurado, os serviços estarão disponíveis em:

- **Portal Público:** http://localhost:3000
- **Painel Institucional:** http://localhost:3001
- **Portal Vítimas:** http://localhost:3002
- **Backend API:** http://localhost:4000
- **MySQL:** localhost:3306
- **API Docs:** http://localhost:4000/api-docs (se implementado)

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
# Limpar tudo
docker system prune -a

# Recriar container MySQL
docker rm sinamdi-mysql
docker run --name sinamdi-mysql -e MYSQL_ROOT_PASSWORD=root123 -e MYSQL_DATABASE=sinamdi -p 3306:3306 -d mysql:8.0
```

### Banco de dados não inicializa

```bash
# Reiniciar MySQL container
docker restart sinamdi-mysql

# Verificar logs
docker logs sinamdi-mysql

# Ou remover e recriar
docker rm -f sinamdi-mysql
docker run --name sinamdi-mysql -e MYSQL_ROOT_PASSWORD=root123 -e MYSQL_DATABASE=sinamdi -p 3306:3306 -d mysql:8.0

# Aguarde ~30 segundos e execute migrations
npm run migrate
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
- [MySQL Tutorial](https://dev.mysql.com/doc/)
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
