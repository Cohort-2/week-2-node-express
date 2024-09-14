// HTTP server

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/home", (req, res) => {
  console.log(req.body); // req.body --> bodyParser --> app.use
  res.send("Hello Home!");
});

app.get("/route-handler", function (req, res) {
  // headers , body , query parameters
  // do machine learning model
  // res.send("Hello World!");
  res.json({
    name: "Subh",
    message: "Hello Hazel",
    age: 25,
    gender: "male",
  });
});

app.get("/", (req, res) => {
  let a = 0;
  console.log("Request has been reached !!");
  for (let i = 0; i < 1000000; i++) {
    a = a + i;
  }
  console.log("loop completed");
  res.send("<h1>Hello World!</h1>");
});

app.post("/conversation", function (req, res) {
  // console.log(req.headers);
  console.log(req.body);
  res.send({
    msg: 2 + 2,
  });
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
