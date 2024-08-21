const http = require("http");
const { json } = require("stream/consumers");
const PORT = 5004;
const HOSTNAME = "localhost";
const server = http.createServer((req, res) => {
  // Home page
  // About page
  // Contact page
  // product page
  // Rest...> Error

  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("welcome to Node JS server by Vaishnav Kumbhar");
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("About Page");
  } else if (req.url == "/contact") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Contact Page");
  } else if (req.url == "/product") {
    const options = {
      hostname: "fakestoreapi.com",
      path: "/products/1",
      method: "GET",
    };

    const apiReq = http.request(options, (apiReq) => {
      apiReq.on("data", (data) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(data.toString());
      });

      apiReq.on("error", () => {
        console.log(e);
      });
    });
    apiReq.end();
  } else {
    req.statusCode = 500;
    res.setHeader("Contact-type", "text/plain");
    res.end("server Error!");
  }
});

server.listen(PORT, () => {
  console.log(`server running at ${HOSTNAME}:${PORT}`);
});
