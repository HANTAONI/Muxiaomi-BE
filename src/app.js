// src/app.js
const express = require("express");
const factoryRoutes = require("./routes/factoryRoutes");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());
app.use("/factory", factoryRoutes);
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
