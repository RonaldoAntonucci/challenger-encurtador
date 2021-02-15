FROM node:14
WORKDIR /urs/src/encurtador
COPY ./package.json .
COPY ormconfig.js .
COPY database.prod.json .
COPY yarn.lock .
RUN yarn install --only=prod
COPY ./dist ./dist
