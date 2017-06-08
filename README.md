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

## Get adverts list

```bash
$ http http://127.0.0.1:3000/api/adverts
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 283
Content-Type: application/json; charset=utf-8
Date: Thu, 08 Jun 2017 14:31:44 GMT
ETag: W/"11b-8KuO01XKM9HRHiKdCmSkpOXPcAo"
X-Powered-By: Express

[
    {
		"__v": 0, 
		"_id": "59395d8cfb11450011535088", 
		"name": "Bicicleta", 
		"photo": "bicycle.png", 
		"price": 230.15, 
		"sale": true, 
		"tags": [
			"lifestyle", 
			"motor"
		]
	}, 
	{
		"__v": 0, 
		"_id": "59395d8dfb11450011535089", 
		"name": "Telefono movil", 
		"photo": "mobile.png", 
		"price": 50, 
		"sale": false, 
		"tags": [
			"lifestyle", 
			"mobile"
		]
	}
]
```
