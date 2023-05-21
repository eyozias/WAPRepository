const express = require("express");
const app = express();
const path = require("path");

app.get("/", function (req, res) {
  //   res.send("Hello World");
  res.sendFile(path.join(__dirname, "/pages/404.html"));
});

app.post("/users", function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/users.html"));
});

app.get("/users", function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/users.html"));
});

app.get("/products", function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/products.html"));
});

app.post("/products", function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/products.html"));
});

app.get("/pages", function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/css/style.css"));
});

app.get("/img", function (req, res) {
  res.sendFile(path.join(__dirname, "/img/Site_Not_Found_Dreambot.fw.png"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/404.html"));
});

app.use((err, req, res, next) => {
  res.sendFile(path.join(__dirname, "/pages/Error.html"));
});

app.listen(3000);
