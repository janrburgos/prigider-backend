const express = require("express");
const router = express.Router();
const Ingredient = require("../Models/Ingredient");

router.post("/", (req, res) => {
  let newIngredient = new Ingredient(req.body);
  newIngredient.save().then((ingredient) => {
    res.send(ingredient);
  });
});

router.put("/:_id", (req, res) => {
  Ingredient.findByIdAndUpdate(req.params._id, req.body, {
    useFindAndModify: false,
    new: true,
  }).then((ingredient) => {
    res.send(ingredient);
  });
});

router.delete("/:_id", (req, res) => {
  Ingredient.findByIdAndDelete(req.params._id).then((ingredient) => {
    res.send(ingredient);
  });
});

module.exports = router;
