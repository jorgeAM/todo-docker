FROM node:14.15-stretch

WORKDIR /usr/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

CMD [ "npm", "start"]