const http = require("http"); // module for http server

http
  .createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Hello World");
  })
  .listen(3000); // HTTP서버 객체의 listen 메소드에 포트넘버 3000을 전달

console.log("erver running at http://127.0.0.1:3000/");
