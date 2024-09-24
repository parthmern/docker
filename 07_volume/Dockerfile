FROM node

WORKDIR /developer/volume

COPY //d/Z_PARTH-CODES/docker .

RUN npm ci

EXPOSE 3000

CMD [ "npm", "start" ]