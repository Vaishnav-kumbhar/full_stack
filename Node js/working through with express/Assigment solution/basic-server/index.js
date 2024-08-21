const express = require("express");
const app = express();
const port = 4999;
const hostname = "localhost";

app.get("/", (req, res) => {
  res.send(JSON.stringify({ msg: `i am homepage` }));
});

app.get("/about", (req, res) => {
  res.send(JSON.stringify({ msg: `i am aboutpage` }));
});

app.get("/contact", (req, res) => {
  res.send(JSON.stringify({ email: `support@pwskills.com` }));
});

app.listen(port, () =>{
    console.log(`server is running at ${hostname}: ${port}`)
})
