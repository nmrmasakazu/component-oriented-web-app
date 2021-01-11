# tele-reha-web-app

Under construction...

## Architecture

![](./architecture.png)

- FE
  - React/Next
- BFF
  - Express
- BE API
  - Spring Boot
- DB
  - MySQL
- Auth
  - Spring Security
  - JWT
- Storage
  - minio
- Reverse proxy
  - Nginx
  - Express (for bucket security)

## Setup

```bash
### With Docker Compose
# up
docker-compose up --build
# Down
docker-compose down --volumes

### With K8S
# Up
docker-compose build
kubectl apply -f deploy
kubectl get-all
# Down
kubectl delete -f deploy
```

## Access

- ログイン
  - http://localhost/login

## References

Thanks

- Architecture
  - https://github.com/callicoder/spring-security-react-ant-design-polls-app
- Next
  - https://github.com/takefumi-yoshii/ts-nextjs-express
- Next JWT
  - https://github.com/jasonraimondi/nextjs-jwt-example
- Express
  - https://gist.github.com/mitsuruog/fc48397a8e80f051a145
- Spring Boot App
  - https://www.callicoder.com/spring-boot-spring-security-jwt-mysql-react-app-part-1/
- JWT
  - https://github.com/murraco/spring-boot-jwt
- MySQL
  - https://qiita.com/Manabu-man/items/58d0f98a15656ed65136
- minio
  - https://github.com/jjrom/minio-proxy/blob/master/container_root/etc/nginx/sites-available/default
  - https://github.com/hedlx/bbs/blob/405b1738c2ae91501f5d13677e713f91207fcfe2/backend-ng/nginx/nginx.conf
