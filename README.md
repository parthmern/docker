# docker

## why container needed ?

- when u have something deployed on physical machine
- it  is hard to make it scale like you there are 50k req/user
- u need to code there, boot up again after updating hard parts 
<br/>

- here public cloud came into picture like aws,azure,gcp, digital ocean 
- they provide cloud machine (Server)
<br/>

- virtual machine- inside your windows you can boot up new virtual machine that can be linux (vm ware/virtual box app)
<br/>

- contianers give u more security
- 2 containers are totally isolated
- docker help us to setup own containers

![img](https://res.cloudinary.com/dncm3mid4/image/upload/v1726991457/githubreadme/c9zczirl8ui68duor6eu.png)

## images
- this are like blue prints of already made containers

- **containers:** like magical box that can hold your toy inside. when u had image, u can use magical box to create exect copy of your toy

- **images:** it is sanpshot or blueprint of complete environment for applicaion. It includes eerything like what the app needs to run such as libraries, dependencies, config etc. it kind of encapsulates the application and all requirememnts together

- COntainer is actual running instace of the environment configured by IMages
- when we run docker image, it creates a live and running container. These containers are isolated very light weight virtual machine. ( actual virtual machines are too heavy weight) but containers are light weight. A big diferance between vm and container is that container shares the Host of Operating System.

<br/>

- in different operating system, some dependencies might work and some not. asssume there are 3 people and they have mac, windows, linux machines and when u run project inside docker so all system can get same environment and they ensure that app behaves in the same way