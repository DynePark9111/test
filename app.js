const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT | 3000;

app.get("/", (req, res) => {
  res.send(`Hello World! PORT:${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${port}`);
});
