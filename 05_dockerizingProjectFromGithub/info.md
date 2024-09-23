## how to run a project which is available on github, directly into your docker container

- here i have to find which OS my docker container is using 
- i did `docker inspect <nodeWHICHISIMAGENAME>` which tell me "OS:linux"
- or i open bash/shell in my container `docker run -it <image_name_or_id> /bin/sh` or `docker run -it <image_name_or_id> sh` and then run command `cat /etc/os-release` for linux OR `systeminfo` for windows which gave me all details about OS

<br/>

- i got "debian linux" as OS went to google and find `apt install git` using this command i can install git


```
# Use the official Node.js base image
FROM node

# Set the working directory inside the container
WORKDIR /developer/nodejs/app_form_github

# Update the package lists for apt
RUN apt update

# Install Git with the -y flag to automatically say 'yes' to any prompts
# here -y is important it helps to do process automatically othwerwise it gives error
RUN apt install -y git

# Verify the installation of Git by checking its version
RUN git --version

# Clone the Git repository into the working directory
RUN git clone https://github.com/parthmern/docker.git

# Change the working directory to the folder containing the Node.js server
WORKDIR /developer/nodejs/app_form_github/docker/04_basicNodeServer

# Install dependencies using npm ci, which is more efficient and reproducible for builds
RUN npm ci

# Start the Node.js application by running index.js
CMD ["node", "index.js"]

```


- then do `docker build -t gitexpress .` to build
- to run `docker run -it --init -p 3000:3000 gitexpress`          
- learn below about EXPOSE command similar as port mapping

## issue of cache

- sometimes while building docker images after upating the code 
- while building process some docker command's code is taken from cache so it took previous code
- how to fix it by clearing all caches `docker builder prune` or `docker builder prune --all`

## how to set env variables

- because we are not going to push .env file on github
- `ENV PORT=3000` use this inside your dokcer file 
- how to recheck it `docker run -it --init gitexpress /bin/sh` open shell and then `env` or `printenv <varName>` to recheck

## must turn off VPN/PROXY
- because it gave me issue while installing npm ci under container


## DOCKER EXPOSE
```
#inside Dockerfile

#expose the particular port to random port
EXPOSE 3000

```

- here i am exposing 3000 number port from container 
- build container and now run this command with capital P `docker run -it --init -P gitexpress`
- how to see it is exposed in which port number into your local machine to do this 
- run `docker ps` it shows all running containers with all exposed port which shows that `0.0.0.0->5501 -> 3000` so here in hostmachine your local machine u can see 3000 port of your container with 5501
