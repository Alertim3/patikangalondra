FROM node:20-bookworm-slim

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --omit=dev

COPY . .

RUN mkdir -p /app/server/data

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "server/index.js"]
