FROM node:8-alpine

ENV NODE_ENV production

ADD . /app

WORKDIR /app

EXPOSE 3000

RUN npm i

CMD npm run build && node index
