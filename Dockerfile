FROM node:22.16.0-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
RUN npm i sharp

FROM node:22.16.0-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_PUBLIC_API_GRAPHQL_CER=http://10.10.142.41:8080/graphql
ENV NEXT_PUBLIC_DOMAIN_CER=http://10.10.142.41:3000
ENV NEXT_PUBLIC_GTM_ID_CER=GTM-1234
RUN npm run build

FROM node:22.16.0-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder --chown=node:node /app/.next ./.next
USER node
EXPOSE 3000
ENV PORT=3000
CMD ["npm", "start"]
