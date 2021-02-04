require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const port = 3001;

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/spectacle", require("./spectacle"));
app.use("/reservation", require("./reservation"));

app.get("/", (req, res) => {
  res.json({
    message: "Api Wild Circus 2.0 🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});
