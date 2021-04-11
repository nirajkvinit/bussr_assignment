FROM node:12-alpine

ADD ./app ./app
WORKDIR /app

COPY ./app/package*.json ./

RUN npm ci && npm run build

EXPOSE 4000

CMD ["node", "dist/index.js"]