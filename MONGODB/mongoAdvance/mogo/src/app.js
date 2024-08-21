import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/instagram", (req, res) => {
  res.send(" You Have Visited Instagram Page");
});

app.get("/twitter", (req, res) => {
  res.send(" You Have Visited Twitter Page");
});
export default app;
