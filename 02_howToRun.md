## how to run image/ container

- install image `docker pull node`
- run new container from image `docker run -it --rm node` (here -i(interact with the container)t(makes the terminal) AND --rm(delete img when it is closed) u can remove --rm)
- how to see running containers/process `docker ps`
- kill the container `docker kill <container_id>`

<br/>

- run container in background `docker run --detach node` or `docker run -d node`
- now how to make it inProgress container `docker attach <containerId>` to make it live or in shell based

<br/>

- give name to containers `docker run --name customName node` (working ` docker run -it --detach --name pathu node`)

<br/>

- how to pause container : `docker pause <container_id>`
- how to unpause `docker unpause <container_id>`

<br/>

- docker run command start a new container
- how to execute commands ` docker exec -it mycontainerName pwd`


### what are tags in docker
- a label that you can give the version name to that image

### inspect image
- inspecting image by `docker inspect node` 
- u can see lot of details like os version, image version, 

# harkirat notes
- https://projects.100xdevs.com/tracks/docker-easy/docker-1