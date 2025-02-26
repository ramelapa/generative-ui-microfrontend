FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

CMD ["npx", "http-server", "dist/finance-dashboard", "-p", "3002"]