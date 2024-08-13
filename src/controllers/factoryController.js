// src/controllers/factoryController.js
const Factory = require("../models/factoryModel");

exports.createFactory = async (req, res) => {
  try {
    const factory = new Factory(req.body);
    await factory.save();
    res.status(201).json(factory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 获取所有工厂
exports.getFactories = async (req, res) => {
  try {
    const factories = await Factory.find();
    res.status(200).json(factories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
