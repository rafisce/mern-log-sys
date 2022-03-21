FROM node:alpine

WORKDIR /app

COPY . .

COPY package*.json .

RUN npm install

EXPOSE 5000

CMD ["npm","run","server"]