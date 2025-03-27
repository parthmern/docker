# how to start yml file that u create

- come to the folder and do `docker compose up -d` runs in detach mode or `docker compose up`
- down whole `docker compose down`

<br/>

- why? generally when you have to start two docker container with same file
- means two microservice with same file

<br/>

- other IMP - all the containers in dokcer-composse file has same Automatic Bridge Network 
- means one docker container has 3000 port and second docker container has 4000 port then, first container can access 4000 port also, likewise second container can also access 3000 port eventhough we are not doing network bridge explicitly
- you can also difine it explicitly but there is already bridge there


<br/>

- here in code example there is network defined explicitly
- run file `docker compose up`
