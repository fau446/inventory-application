const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ShuttlecockSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  description: { type: String, required: true },
  category: { type: String, required: true, default: "shuttlecock" },
  number_in_stock: { type: Number, required: true },
  company: { type: String, required: true },
});

ShuttlecockSchema.virtual("url").get(function () {
  return `/inventory/shuttlecock/${this._id}`;
});

module.exports = mongoose.model("Shuttlecock", ShuttlecockSchema);
