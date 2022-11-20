import dotenv from "dotenv";
import fetch from "node-fetch";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());

app.get("/standings", (req, res) => {
  const url = "http://api.cup2022.ir/api/v1/standings";
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + process.env.ACCESS_TOKEN,
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      res.status(200).send(json.data);
    })
    .catch((err) => res.status(404).send(err));
});

app.get("/match", (req, res) => {
  const url = "http://api.cup2022.ir/api/v1/match";
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + process.env.ACCESS_TOKEN,
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      res.status(200).send(json.data);
    })
    .catch((err) => res.status(404).send(err));
});

app.listen(3000, () => {
  console.log("API Server está funcionando");
});
