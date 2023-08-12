import express from "express";
const port = 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Express server.</h1>");
});

app.listen(port);
