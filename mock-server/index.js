const express = require("express");
const cors = require("cors");
const { response } = require("express");

const app = express();
const port = 8080;

app.use(cors());

app.post("/user/login", (request, response) => {
  response.send({ token: "abc"});
});

app.post("/post-mission", (request, response) => {
  response.send();
});

app.post("/add-special-address", (request, response) => {
  response.send();
});

app.get("/missions-data-table", (req, res) => {
  res.send([
    {
      codename: "Peking",
      missionsDate: "16.08.2023",
      status: "W trakcie",
      budget: "100",
    },
    {
      codename: "Dynamo",
      missionsDate: "24.12.2023",
      status: "W trakcie",
      budget: "100",
    },
    {
      codename: "Foo",
      missionsDate: "01.01.2024",
      status: "W trakcie",
      budget: "50",
    },
    {
      codename: "Traveler 001",
      missionsDate: "13.03.2023",
      status: "Zrealizowana",
      budget: "100",
    },
    {
      codename: "Wielki grill",
      missionsDate: "16.08.2025",
      status: "Przyszłe",
      budget: "1000",
    },
    {
      codename: "Faraway",
      missionsDate: "04.06.2022",
      status: "Zrealizowane",
      budget: "75",
    },
    {
      codename: "Singleton",
      missionsDate: "16.08.2021",
      status: "Zrealizowane",
      budget: "340",
    },
  ]);
});

app.get("/addresses-special-points", (req, res) => {
  res.send([
    {
      codename: "Adres główny",
      missionsDate: "Mój dom",
      status: "ul.Przyjazna 5/10 , 00-200 Arrakis",
    },
    {
      codename: "Adres punktu teleportacji",
      missionsDate: "Adres punktu teleportacji 1",
      status: "ul.Przyjazna 5/10 , 12-300 Kaladan",
      budget: "100",
    },
    {
      codename: "Adres punktu teleportacji",
      missionsDate: "Adres punktu teleportacji 2",
      status: "ul.Przyjazna 5/10 , 12-300 Kaitain",
      budget: "50",
    },
    {
      codename: "Inny adres",
      missionsDate: "Inny adres 1 ",
      status: "ul.Przyjazna 5/10 , 12-300 Wallach",
      budget: "100",
    },
    {
      codename: "Adres główny",
      missionsDate: "Mój dom",
      status: "ul.Przyjazna 5/10 , 00-200 Arrakis",
    },
    {
      codename: "Adres punktu teleportacji",
      missionsDate: "Adres punktu teleportacji 1",
      status: "ul.Przyjazna 5/10 , 12-300 Kaladan",
      budget: "100",
    },
    {
      codename: "Adres punktu teleportacji",
      missionsDate: "Adres punktu teleportacji 2",
      status: "ul.Przyjazna 5/10 , 12-300 Kaitain",
      budget: "50",
    },
  ]);
});

app.listen(port, () => {
  console.log("Mock server is running on port: ", port);
});
