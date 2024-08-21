const app = require("./app.js");
const hostname = "localhost";
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on ${hostname}: ${PORT}`);
});
