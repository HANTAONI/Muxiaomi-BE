// src/routes/factoryRoutes.js
const express = require("express");
const {
  createFactory,
  getFactories,
} = require("../controllers/factoryController");

const router = express.Router();

router.post("/factories", createFactory);

router.get("/factories", getFactories);

module.exports = router;
