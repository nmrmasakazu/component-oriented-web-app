FROM node:10-alpine

WORKDIR /storage

COPY ./ ./

RUN yarn install \
 && yarn build

CMD ["sh", "-c", "yarn start"]
