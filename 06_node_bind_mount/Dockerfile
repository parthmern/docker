FROM node

WORKDIR /developer/nodejs/node_bind_project

COPY . .

RUN npm ci

EXPOSE 3000

CMD [ "npm", "start" ]