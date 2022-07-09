import express from "express";
const app = express();
const cors = require("cors");
const miseRoutes = require("./routes/mise.routes");
const cache = require("./middlewares/routeCache");

require("dotenv").config();
const PORT = process.env.PORT || 3001;
const ORIGIN = process.env.ORIGIN;

app.use(cors({ origin: ORIGIN, credentials: true }));

app.get("/", (req, res) => {
  res.send("home");
});

const secondsCached = 10 * 60;
app.use("/mise", cache(secondsCached), miseRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
