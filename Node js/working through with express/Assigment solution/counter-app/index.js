const express = require("express");
const counter = express();
const PORT = 5003;
const hostname = "localhost";
counter.get("/", (req, res) => {
  res.send(JSON.stringify({ count: 0 }));
});

counter.get("/increment", (req, res) => {
  res.send(JSON.stringify({ count: 0 + 1 }));
});

counter.get("/decrement", (req, res) => {
  res.send(JSON.stringify({ count: 1 - 1 }));
});

counter.listen(PORT, () => {
  console.log(`server is running at ${hostname}: ${PORT}`);
});