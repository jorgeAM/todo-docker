FROM node:12.16.2-stretch

WORKDIR /usr/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

CMD [ "npm", "start"]