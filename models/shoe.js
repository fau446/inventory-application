const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ShoeSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  description: { type: String, required: true },
  category: { type: String, required: true, default: "shoe" },
  number_in_stock: { type: Number, required: true },
  company: { type: String, required: true },
});

ShoeSchema.virtual("url").get(function () {
  return `/inventory/shoe/${this._id}`;
});

module.exports = mongoose.model("Shoe", ShoeSchema);
