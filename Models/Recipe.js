const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  name: { type: String, required: true },
  category: String,
  details: String,
  imageUrl: {
    type: String,
    default:
      "https://res.cloudinary.com/upliftfoodinventory/image/upload/v1625032618/food-inventory/default/default-recipe.png",
  },
  recipeIngredients: [
    {
      ingredient: { type: Schema.Types.ObjectId, ref: "Ingredient" },
      quantity: { type: Number, default: 0 },
      displayUnit: { type: String, default: "gram" },
    },
  ],
});

module.exports = mongoose.model("Recipe", RecipeSchema);
