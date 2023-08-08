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

app.get("/missions-data-table", (req, res) => {
  res.send([
    {
      codename: "Peking",
      misisonDate: "16.08.2023",
      status: "W trakcie",
      budget: "100",
    },
    {
      codename: "Dynamo",
      misisonDate: "24.12.2023",
      status: "W trakcie",
      budget: "100",
    },
    {
      codename: "Foo",
      misisonDate: "01.01.2024",
      status: "W trakcie",
      budget: "50",
    },
    {
      codename: "Traveler 001",
      misisonDate: "13.03.2023",
      status: "Zrealizowana",
      budget: "100",
    },
    {
      codename: "Wielki grill",
      misisonDate: "16.08.2025",
      status: "Przyszłe",
      budget: "1000",
    },
    {
      codename: "Faraway",
      misisonDate: "04.06.2022",
      status: "Zrealizowane",
      budget: "75",
    },
    {
      codename: "Singleton",
      misisonDate: "16.08.2021",
      status: "Zrealizowane",
      budget: "340",
    },
  ]);
});
