FROM node

WORKDIR /developer/nodejs/my-server

COPY . .

COPY package*.json ./

RUN npm ci

CMD ["node", "index.js"]