FROM node:latest
MAINTAINER Sergio Alonso <sergio@sergioalonso.es>

ENV NPM_CONFIG_LOGLEVEL warn

RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN npm install

COPY . /app

RUN mkdir /data

EXPOSE 3000

CMD ["npm", "start"]
