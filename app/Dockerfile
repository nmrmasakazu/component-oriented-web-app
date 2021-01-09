FROM node:10-alpine

WORKDIR /app

COPY ./ ./

RUN yarn install

RUN yarn build:client \
    && yarn build:server

CMD ["sh", "-c", "yarn start"]
