## how to build and run it

- build it first go to the folder here 03/makerDockerFile 
- then `docker build .` to build it then you can do (here . means the path/folder in which dockerfile is present)
- you got sha:imageID or `docker images` to see newly added image 
- to run it do `docker run <imageId>` to run container from that image

<br/>

- how to remove image `docker rmi <imageId>` or forcefully by `docker rmi <imageId> -f`
- how to give tag name / repository name ` docker build -t mytagname .`;

<br/>
<br/>

- how to run container in iterative mode live mode `docker run -it <imageName>`
- while opening it in this mode when u press ctrl+c to close it or kill container you are not able to do it
- to perform above thing use `docker run -it --init <imageName>`

<br/>

- here how to see docker running process/conntainer `docker ps`
- to see all available docker container `docker container ls -a`
- remove docker container `docker rm <containerId>`