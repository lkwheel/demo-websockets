# demo-websockets
A project where I work on WebSockets using Spring Boot, Angular, SockJS and Stomp

This project is based on Spring Boot 2.6.2, Angular 12.0.5, `"@stomp/ng2-stompjs": "^8.0.0"`, `"@stomp/stompjs": "^6.1.2"`, and `"@types/sockjs-client": "^1.5.1"`

It is composed of two projects:

* demo-websockets-server (Spring Boot)
* demo-websockets-client (Angular)

## To run
To run the WebSockets server, navigate to the demo-websockets-server directory -
```bash
$ cd demo-websockets-server
$ mvn spring-boot:run
```

To run the Angular Web app -
```bash
$ cd demo-websockets-client
$ npm install
$ npm start
```
