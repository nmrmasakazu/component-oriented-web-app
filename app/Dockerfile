FROM node:10-alpine

WORKDIR /app

COPY ./ ./

RUN yarn install

RUN yarn build

CMD ["sh", "-c", "yarn start"]
