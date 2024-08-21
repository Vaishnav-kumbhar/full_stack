import app from "./app.js";
import mongoose from "mongoose";
const port = 3000;

// database is always is an another continent
// database may fail

(async () => {
  // databse connection
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("db connected successfully");

    // express
    app.on("error", (err) => {
      console.log("ERROR: ", err);
      throw err;
    });

    const onListening = () => {
      console.log(`Listening on port number ${port}`);
    };

    app.listen(port, onListening);
  } catch (error) {
    console.log("error while db connection", error);
    throw error;
  }
})();
