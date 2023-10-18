# Auth

Micro service for authentication
### Go to Auth root folder

### Then create private network
```
docker network create auth
```

### You can run containerized version with

```
docker run --name auth -p 4000:4000 --rm  -it --network auth --env-file ./config/config.env auth:latest
```
