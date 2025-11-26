# back-end/Dockerfile

FROM node:20-slim

# 1) Pasta de trabalho
WORKDIR /app

# 2) Habilitar pnpm (via corepack)
ENV PNPM_HOME="/usr/local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# 3) Instalar dependências
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# 4) Copiar schema do Prisma e gerar client
COPY prisma ./prisma

# usa o Prisma que já está no node_modules (6.19.0)
RUN pnpm exec prisma generate


# 5) Copiar código fonte
COPY . .

# 6) Build TypeScript -> dist/
RUN pnpm run build

# 7) Porta que o Cloud Run vai usar
EXPOSE 8080

# 8) Start (usa process.env.PORT dentro do server.ts)
CMD ["node", "dist/config/server.js"]
