import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 5000;

const app = express();
app.use(express.static("./navbar-app"));
// app.get
app.get("/", (req, res) => {
  res.sendFile(__dirname, "./navbar-app/index.html");
});

app.get("/about", (req, res) => {
  res.status(200).send("<h1>About</h1>");
});

// app.all
app.all("*", (req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

// app.post
// app.put
// app.delete
// app.use

// app.listen
app.listen(port);
