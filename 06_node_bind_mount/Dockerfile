FROM node

WORKDIR /developer/nodejs/node_bind_project

COPY . .

RUN npm ci

#can ignore it donot know
RUN npm i -g nodemon@dev

EXPOSE 3000

CMD [ "npm", "start" ]