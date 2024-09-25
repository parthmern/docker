## what is binding mount | SET UP local dev environement with docker

- lets take example of this preset project
- when u build image and then run container it is working good
- but when u do some chnages in your file like index.js in your local machine 
- that changes are not going to reflect on containers automatically right? bcz they are isolated machines

<br/>

- to solve this we can do bind mount with our local machine's working directory
- first i did build image
- then run it like `docker run -it --init -p 3002:3000 -v "${PWD}:/developer/nodejs/node_bind_project" <imageName>` 
- or `docker run -it --init  -v "C:\Users\parth\Downloads\06_node_bind_mount\06_node_bind_mount:/developer/nodejs/node_bind_project" --name containernewname -p 3000:3000 vol`  (powershell)
- imp stuff to know here PWD is path of your local machine's directory where you are working 
- when u do some chnages in local machine it automatically reflects into the file of containers so nodemon automatically detects it so it is kind of development environment
- vice versa when you do some changes in file of container it reflects to your localmachine file


# how to check wokring or not

- first check mounted successfully or not for this `docker inspect <containerIdinwhichthatImageisrunning>` and it wass looking like below

```
 "Mounts": [
            {
                "Type": "bind",
                "Source": "C:\\Users\\parth\\Downloads\\06_node_bind_mount\\06_node_bind_mount",
                "Destination": "/developer/nodejs/node_bind_project",
                "Mode": "",
                "RW": true,
                "Propagation": "rprivate"
            }
        ],
```


<br/>

- Then, first see container in another tab and container id ` docker exec -it <containerId> sh` it will open bash/shell so do `ls` then `touch file.txt` it will reflect to your local machine 
- or u can change any file in local machine and then do `cat filename` to see changes are reflected or not 

<br/>

- if NODEMON is not taking reloading then must use `"start": "nodemon -L index.js"` in package.json file here `-L` is important it means `--legacy-watch` 
- *spent 12Hr to solve this please do like[https://chatgpt.com/share/66f3a938-a1e8-8010-8ed0-356804852667]*

<br/>

- also used `RUN npm i -g nodemon@dev` in Dockerfile. so u can also include it 