const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, default: 0 },
  displayUnit: { type: String, default: "gram" },
  density: { type: Number, default: 1 },
  totalCost: { type: Number, default: 0 },
  category: String,
  location: String,
  remarks: String,
  dateUpdated: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Ingredient", IngredientSchema);
