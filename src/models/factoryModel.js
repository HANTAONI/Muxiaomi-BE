const mongoose = require("mongoose");

const factorySchema = new mongoose.Schema({
  id: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
  factory_name: { type: String, required: true },
  company_id: { type: Number, required: true },
});

module.exports = mongoose.model("Factory", factorySchema);
