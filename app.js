import express from "express";
const port = 5000;

const app = express();

// app.get
app.get("/", (req, res) => {
  res.status(200).send("<h1>Home Page</h1>");
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
