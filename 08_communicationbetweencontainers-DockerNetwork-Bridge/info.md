# communication between docker containers | DOCKER NETWORK | BRIDGE | Bridge network driver

- ![img](https://res.cloudinary.com/dncm3mid4/image/upload/v1727254378/githubreadme/zi2zji63cfydsuimzmj5.png)

- TO make communication we have to make NETWORK-BRIDGE

- ![bridge](https://res.cloudinary.com/dncm3mid4/image/upload/v1727255084/githubreadme/zymvolo2nbo36rimltiw.png)

- how to do
- create network `docker network create microservice-bridge`
- see all `docker network ls`

<br/>

- lets assume u made a container which is running on PORT 3000 which is nodeJs server **MAKE sure to give name to that container** example `docker run -d --name nodejs-app -p 3000:3000 --network microservice-bridge node:latest`
- now u do `docker inspect microservice-bridge`
- running another docker container example `docker run -d --name db-container --network microservice-bridge postgres:latest`
- now u do `docker inspect microservice-bridge`


# process that i done

- i have only 2 different node images (one which is express server/bindmount that i used during before lecture and another is pure nodejs server)
- first container `docker run -it --init --name nodecontainer --network microservice-bridge node` (vanila nodejs)
- second container `docker run -it --init --name volumecontainer --network microservice-bridge volumeimage` (express server)
- now i do `docker inspect microservice-bridge` 

```
"Containers": {
            "679aee115255ab3353f9a40b67a840768773e4b3d96958c01e773843b50f168b": {
                "Name": "volumecontainer",
                "EndpointID": "71248ebadd15c4d8378167bc09958bd76dd7917261c2175d2d9aea5e88b751f6",
                "MacAddress": "02:42:ac:13:00:03",
                "IPv4Address": "172.19.0.3/16",
                "IPv6Address": ""
            },
            "ff197b58c4fed57a636f6939d738fed9de5145eca68ddd962a54f914133a44bd": {
                "Name": "nodecontainer",
                "EndpointID": "6e24f36e99a33deb709d05ec5da567ba4c30f9fdffe7cf074e7fe05daab4f9cf",
                "MacAddress": "02:42:ac:13:00:02",
                "IPv4Address": "172.19.0.2/16",
                "IPv6Address": ""
            }
        },
```

- after wards how can we put request to another container, so here i had first container which is plane nodejs in which i did network request on `http://volumecontainer:3000/` thats why here containerName is important to put req and i got response as well as in second container express server there is console printed that "PING ON home"

![bridges](https://res.cloudinary.com/dncm3mid4/image/upload/v1727258124/githubreadme/s2gmqdjimbg4lrkvthhw.png)

- it can also work with reverse proxy