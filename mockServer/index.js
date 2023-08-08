const express = require("express");
const cors = require("cors");
const { response } = require("express");

const app = express();
const port = 8080;

app.use(cors());

app.post("/user/login", (request, response) => {
  response.status = 403;
  response.send({ token: "abc"});
});

app.listen(port, () => {
  console.log("Mock server is running on port: ", port);
});
