const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StringSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  description: { type: String, required: true },
  category: { type: String, required: true, default: "string" },
  number_in_stock: { type: Number, required: true },
  company: { type: String, required: true },
});

StringSchema.virtual("url").get(function () {
  return `/inventory/string/${this._id}`;
});

module.exports = mongoose.model("String", StringSchema);
