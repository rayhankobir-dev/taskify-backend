const express = require("express");
const cors = require("cors");
const routes = require("./routes");

// create express app
const app = express();

// middleware configure
app.use(cors());
app.use(express.json());

app.use("/api", routes);

// error handling middleware
app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});

module.exports = app;
