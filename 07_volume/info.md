## volumes

- While bind mounts are dependent on the directory structure and OS of the host machine, volumes are completely managed by Docker.

- when u create docker container that time docker container gets temporary memory like if you created a DB in docker container when you delete that container the memory is going to remove
- here docker volume are permenent storage that u can bind with your container and use it

## how to use it

- create volume ` docker volume create <volname>`
- see all volumes `docker volume ls`
- binding a volume `docker run -it --init -v <volname>:/developer/volume <imagename> sh` i am directly running shell here but we can do anything u know
- after that creating a new text file under docker container

```
# ls
Dockerfile  index.js  info.md  node_modules  package-lock.json  package.json
# touch newFile.txt
# ls
Dockerfile  index.js  info.md  newFile.txt  node_modules  package-lock.json  package.json
```

- here this file "newFile.txt" is not able to visible in local machine because we binded volume here
- afterwards when i create new container with another image like `docker run -it --init -v <previousVolumeNameThatWeUsedForBinding>:/app node sh` 


```
# ls
app  boot  etc   lib    media  opt   root  sbin  sys  usr
bin  dev   home  lib64  mnt    proc  run   srv   tmp  var
# cd app
# ls
Dockerfile  index.js  info.md  newFile.txt  node_modules  package-lock.json  package.json
```

- here this container automatically gets all the files which are saved in that volume automatically

<br/>
<br/>

- even in future we delete container, however volume should be there and that we can use 
- **we are putting nodemodules all folder into the volume to make them similar everytimes**


<br/>

- we can also do this `docker run -v /path/on/host:/path/in/container -v my_volume:/app_data my_image`