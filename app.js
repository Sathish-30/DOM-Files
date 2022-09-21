const express = require("express");
const path = require("path");
const server = express();
const database = ["Avengers", "Superman", "iron man"];
server.get("/", (req, res) => {
  res.send("<h1>Home Route😁</h1>");
});
server.get("/about", (req, res) => {
  //Header is used to describe the send content-type
  res.header("content-type", "text/html");
  //Status says the status is Ok or not
  //there are many status code
  res.status(201);
  //It's a response sender
  res.send("<div><h1>It's is about route</h1></div>");
});
server.get("/movies", (req, res) => {
  res.send(database);
});
server.get("*", (req, res) => {
  res.send("404");
});
server.get("/file", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});
//This functions help us to check whether server is running or not
server.listen(4500, () => {
  console.log("Server is running on port 4500");
});
