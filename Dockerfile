FROM node:12

COPY . /app

WORKDIR /app

RUN npm install

EXPOSE 8080

CMD npm run start