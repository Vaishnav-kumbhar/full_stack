const HTTP = require("http");
const PORT = 5000;
const hostname = "localhost";
const server = HTTP.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Welcome to Men and Women Dummy Data".toUpperCase());
  } else if (req.url == "/men") {
    const men = {
      id: 1,
      name: "rohit",
      brand: "ABC",
      price: 19.99,
      color: "blue",
      size: "M",
      category: "Clothing",
    };
    res.end(JSON.stringify(men));
  } else if (req.url == "/women") {
    const women = {
      id: 1,
      name: "Women",
      brand: "ABC",
      price: 19.99,
      color: "blue",
      size: "M",
      category: "Clothing",
    };
    res.end(JSON.stringify(women));
  } else {
    res.end("404 not found");
  }
});

server.listen(PORT, () => {
  console.log(`server running at ${hostname}: ${PORT}`);
});
