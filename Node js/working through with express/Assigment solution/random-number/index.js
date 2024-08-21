const express = require("express");
const randomNumber = express();
const port = 5004;
const hostName = "localhost";

randomNumber.get("/", (req, res) => {
  res.send(JSON.stringify({ random: Math.floor(Math.random() * 4) }));
});

randomNumber.listen(port, () => {
  console.log(`server is runnig ${hostName}: ${port}`);
});
