# ===== Stage 1: Build =====
FROM node:20-slim AS builder

WORKDIR /app

# usar pnpm via corepack
ENV PNPM_HOME="/usr/local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# resto do projeto + build
COPY . .
RUN pnpm run build

# ===== Stage 2: Runtime =====
FROM node:20-slim AS runner

WORKDIR /app
ENV NODE_ENV=production

ENV PNPM_HOME="/usr/local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# deps de produção
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

# artefatos do build
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.* ./ || true
COPY --from=builder /app/tsconfig.json ./tsconfig.json

# Next usa 3000 e respeita PORT
ENV PORT=3000
EXPOSE 3000

CMD ["pnpm", "start"]
