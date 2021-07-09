const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  restaurantName: { type: String, required: true },
  branch: { type: String, default: "" }, // optional
  avatarUrl: {
    type: String,
    default:
      "https://res.cloudinary.com/upliftfoodinventory/image/upload/v1625032797/food-inventory/default/default-avatar.jpg",
  },
  accountCreated: { type: Date, default: Date.now() },
  ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredient" }],
  recipes: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
