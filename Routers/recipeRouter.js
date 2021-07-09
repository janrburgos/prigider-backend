const express = require("express");
const router = express.Router();
const Recipe = require("../Models/Recipe");

router.post("/", (req, res) => {
  let newRecipe = new Recipe(req.body);
  newRecipe.save().then((recipe) => {
    res.send(recipe);
  });
});

router.put("/:_id", (req, res) => {
  Recipe.findByIdAndUpdate(req.params._id, req.body, {
    useFindAndModify: false,
    new: true,
  })
    .populate("recipeIngredients.ingredient")
    .exec()
    .then((recipe) => {
      res.send(recipe);
    });
});

router.delete("/:_id", (req, res) => {
  Recipe.findByIdAndDelete(req.params._id).then((recipe) => {
    res.send(recipe);
  });
});

module.exports = router;
