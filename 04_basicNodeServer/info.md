## how to write

```
# Use the official Node.js image from Docker Hub as the base image
FROM node

# Set the working directory inside the container
WORKDIR /developer/nodejs/my-server

# Copy all the files from the current directory on the host machine to the working directory in the container
COPY . .

# Copy only the package.json and package-lock.json files to the working directory inside the container
COPY package*.json ./

# Install exact versions of dependencies from package-lock.json (commented out for now, can be uncommented if needed)
# RUN npm ci

# Start the Node.js application by running index.js ( node index.js execute)
CMD ["node", "index.js"]

```

- after coming to path `D:\Z_PARTH-CODES\docker\04_basicNodeServe` how i build it ( `docker build -t myexpressserver .` )
- then `docker images` i can see image named "myexpressserver"
- then run it by `docker run -it --init myexpressserver`
- ISSUE: when i hit "http://localhost:3000/" on my local machine i am not able to grt response it is not available now because docker container is running in isolated mode so what to do now
- to solve it we have to do **port mapping** `docker run -it --init --publish 5000:3000 myexpressserver` here HOSTMACHINEPORT_YOURACTUALMACHINE:CONTAINERPORT 
- another short way `docker run  -p 27017:27017 mongo`
- now u hit "http://localhost:5000/" u can get response

<br/>

- if you want to **open shell** in it then do `docker run -it <image_name> /bin/sh`


