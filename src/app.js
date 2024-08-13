// src/app.js
const express = require("express");
const factoryRoutes = require("./routes/factoryRoutes");

const app = express();

app.use(express.json());
app.use("/api", factoryRoutes);

module.exports = app;
