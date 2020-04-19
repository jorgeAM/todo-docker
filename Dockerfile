FROM node:12.16.2-stretch

WORKDIR /usr/app

COPY package*.json ./

RUN npm i

COPY . .

ENV PORT=8080

RUN npm run build

EXPOSE 8080

CMD [ "npm", "start"]