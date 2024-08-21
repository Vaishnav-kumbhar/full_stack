const httpModule = require("http");

const user_Server = httpModule.createServer((req, res) => {
  if (req.url === "/pw") {
    res.write(
      "<h1> I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>"
    );
  } else if (req.url === "/vaishnav") {
    res.write("<h1>Vaishnav Kumbhar is a Full_Stack_Developer!</h1>");
  }
  res.end();
});

user_Server.listen(5000);
console.log("HTTP server is runnig on port 5000");
