const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1> Hello, slash!</h2>");
  } else if (req.url === "/about") {
    res.write("<h1> About Page!</h1>");
  }
    res.end();
});

server.listen(5000);
console.log('The HTTP server is runnig on port 5000');