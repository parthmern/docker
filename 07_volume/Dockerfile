FROM node

WORKDIR /developer/volume

COPY . .

RUN npm ci

EXPOSE 3000

CMD [ "npm", "start" ]