FROM node:10-alpine

WORKDIR /usr/app
COPY ./package.json ./yarn.lock ./

RUN yarn

COPY . .

EXPOSE ${PORT}

CMD ["yarn", "start"]