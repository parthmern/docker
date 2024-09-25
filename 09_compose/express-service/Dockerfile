FROM node

WORKDIR /developer/volume

COPY . .

RUN npm ci

EXPOSE 4000

CMD [ "npm", "start" ]