# --- Estágio 1: Builder (A Fábrica) ---
FROM node:22-alpine AS builder

# Instala dependências do sistema necessárias pro compilador (Python, Make, g++)
# O Alpine é minimalista, às vezes precisa disso pro bcrypt/prisma
RUN apk add --no-cache python3 make g++

WORKDIR /app

# Copia arquivos de dependência
COPY package*.json ./
COPY prisma ./prisma/

# Instala TUDO (incluindo devDependencies pro TypeScript)
RUN npm ci

# Copia o resto do código
COPY . .

# Gera o cliente do Prisma e Builda o TS
RUN npx prisma generate
RUN npm run build

# --- Estágio 2: Runner (A Produção) ---
FROM node:22-alpine

WORKDIR /app

# Instala apenas o necessário pro Prisma rodar no Alpine
RUN apk add --no-cache openssl

# Copia apenas o necessário do estágio anterior
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma/

# Instala APENAS dependências de produção (limpeza total)
RUN npm ci --omit=dev

# Gera o Prisma Client de novo (necessário no ambiente final)
RUN npx prisma generate

# Expõe a porta (O EB gosta da porta 8080 por padrão ou configurável)
EXPOSE 8080

# O comando que faz a mágica acontecer
CMD ["npm", "run", "start"]