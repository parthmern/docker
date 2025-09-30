## pushing immages to docker hub

- like npm packages to npm

- do login `docker login`

<br/>

- first give tag to your previous image `docker tag firstimage YOUR_DOCKERHUB_USERNAME/firstimage` like  `docker tag volumeimage pptl8685/volumeimage` 
- now u can push `docker push pptl8685/volumeimage`

## SOME EXTRA notes

- diff of EXPOSE and PORT in docker files https://stackoverflow.com/questions/40801772/what-is-the-difference-between-ports-and-expose-in-docker-compose
