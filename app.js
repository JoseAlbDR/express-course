import http from "http";
import { readFileSync } from "fs";

// get all files
const homePage = readFileSync("./navbar-app/index.html");
const css = readFileSync("./navbar-app/styles.css");
const logo = readFileSync("./navbar-app/logo.svg");
const script = readFileSync("./navbar-app/browser-app.js");

const port = 5000;

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write(homePage);
    res.end();
  } else if (url === "/logo.svg") {
    res.writeHead(200, {
      "content-type": "image/svg+xml",
    });
    res.write(logo);
    res.end();
  } else if (url === "/browser-app.js") {
    res.writeHead(200, {
      "content-type": "text/javascript",
    });
    res.write(script);
    res.end();
  } else if (url === "/styles.css") {
    res.writeHead(200, {
      "content-type": "text/css",
    });
    res.write(css);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write("<h1>About Page</h1>");
    res.end();
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.write("<h1>Page Not Found</h1>");
    res.end();
  }
});

server.listen(port);
