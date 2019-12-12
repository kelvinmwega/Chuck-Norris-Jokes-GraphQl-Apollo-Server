FROM node:10

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm ci

COPY . .

EXPOSE 4000

RUN npm run build

CMD npm run start:env