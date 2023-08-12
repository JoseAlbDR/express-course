import http from "http";

const port = 5000;

const server = http.createServer((req, res) => {
  console.log("User hit the server");
  res.end("<h1>Home Page</h1>");
});

server.listen(port);
