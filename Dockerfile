# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install --frozen-lockfile
COPY . .
RUN npm run build
RUN npm run export

# Stage 2: Prepare static files
FROM alpine:3.18 AS runner
WORKDIR /var/www/html/frontend

COPY --from=builder /app/out ./
