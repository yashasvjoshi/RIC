const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile("http:127.0.0.1:5500");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
