FROM node

WORKDIR /developer/nodejs/app_form_github

RUN apt update
RUN apt install -y git
RUN git --version

RUN git clone https://github.com/parthmern/docker.git 

WORKDIR /developer/nodejs/app_form_github/docker/04_basicNodeServer/

# how to set env variables
ENV PORT=3000

RUN npm ci

CMD ["node", "index.js"]