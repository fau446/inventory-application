const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RacketSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  description: { type: String, required: true },
  category: { type: String, required: true, default: "racket" },
  number_in_stock: { type: Number, required: true },
  company: { type: String, required: true },
});

RacketSchema.virtual("url").get(function () {
  return `/inventory/racket/${this._id}`;
});

module.exports = mongoose.model("Racket", RacketSchema);
