const express = require("express");
const router = express.Router();
const Restaurant = require("../Models/Restaurant");

router.get("/:username", (req, res) => {
  Restaurant.find({ username: req.params.username })
    .populate("ingredients")
    .populate({ path: "recipes", populate: "recipeIngredients.ingredient" })
    .exec()
    .then((restaurant) => {
      res.send(restaurant);
    });
});

router.post("/", (req, res) => {
  let newRestaurant = new Restaurant(req.body);

  Restaurant.findOne({ username: req.body.username }).then((username) => {
    if (username) {
      res.send({ error: "This username is already taken" });
    } else {
      newRestaurant.save();
      res.end();
    }
  });
});

router.put("/:_id", (req, res) => {
  Restaurant.findByIdAndUpdate(req.params._id, req.body, {
    useFindAndModify: false,
    new: true,
  })
    .populate("ingredients")
    .populate({ path: "recipes", populate: "recipeIngredients.ingredient" })
    .exec()
    .then((restaurant) => {
      res.send(restaurant);
    });
});

router.delete("/:_id", (req, res) => {
  Restaurant.findByIdAndDelete(req.params._id).then((restaurant) => {
    res.send(restaurant);
  });
});

module.exports = router;
