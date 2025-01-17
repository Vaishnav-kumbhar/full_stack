require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDb = require("./config/db.js");
const app = express();

// Express middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// init connection to db
connectToDb();
const userRouters = require("./routes/userRoutes.js");
app.use("/", userRouters);

module.exports = app;
