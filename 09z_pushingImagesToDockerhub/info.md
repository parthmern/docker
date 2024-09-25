## pushing immages to docker hub

- like npm packages to npm

- do login `docker login`

<br/>

- first give tag to your previous image `docker tag firstimage YOUR_DOCKERHUB_USERNAME/firstimage` like  `docker tag volumeimage pptl8685/volumeimage` 
- now u can push `docker push pptl8685/volumeimage`