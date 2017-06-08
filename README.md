# KeepCoding Node.js API

## Requirements

Install [Docker](https://docs.docker.com/engine/installation/)

Install [Docker Compose](https://docs.docker.com/compose/install/)

Install [HTTPie](https://httpie.org/)

## Run application

```bash
docker-compose up
```

## Go to home page

```bash
$ http http://127.0.0.1:3000/
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 207
Content-Type: text/html; charset=utf-8
Date: Thu, 08 Jun 2017 14:25:46 GMT
ETag: W/"cf-sMq3uu/Hzh7Qc54TveG8DxiBA2U"
X-Powered-By: Express

<!DOCTYPE html>
<html>
  <head>
      <title>Express</title>
      <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
      <h1>Express</h1>
      <p>Welcome to Express</p>
  </body>
</html>
```
