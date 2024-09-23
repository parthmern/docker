## what is binding mount | SET UP local dev environement with docker

- lets take example of this preset project
- when u build image and then run container it is working good
- but when u do some chnages in your file like index.js in your local machine 
- that changes are not going to reflect on containers automatically right? bcz they are isolated machines

<br/>

- to solve this we can do bind mount with our local machine's working directory
- first i did build image
- then run it like `docker run -it --init -p 3002:3000 -v "${PWD}:/developer/nodejs/node_bind_project" binding` 
- imp stuff to know here PWD is path of your local machine's directory where you are working 


# benchod nhi chal rha mere me PWD me kuch lafde hai