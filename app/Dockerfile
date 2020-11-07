FROM node:10-alpine

WORKDIR /app

COPY ./ ./

RUN yarn install

CMD ["sh", "-c", "yarn build ; yarn start"]
