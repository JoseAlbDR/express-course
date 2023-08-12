import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 5000;

const app = express();
app.use(express.static("./navbar-app"));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname, "./navbar-app/index.html");
//   adding to static assets
//   SSR
//
// });

app.get("/about", (req, res) => {
  res.status(200).send("<h1>About</h1>");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(port);
