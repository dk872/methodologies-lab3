FROM node:23.11.0-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

FROM alpine:3.19

WORKDIR /app

RUN apk add --no-cache nodejs

COPY --from=builder /app /app

CMD ["node", "app.js"]