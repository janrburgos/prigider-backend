const express = require("express");
const router = express.Router();
const { cloudinary } = require("../Utils/cloudinary");

router.post("/avatar", (req, res) => {
  cloudinary.uploader
    .upload(req.body.data, {
      folder: `food-inventory/restaurants/${req.body.username}/avatars`,
    })
    .then((avatar) => {
      res.send(avatar.url);
    });
});

router.post("/recipe", (req, res) => {
  cloudinary.uploader
    .upload(req.body.data, {
      folder: `food-inventory/restaurants/${req.body.username}/${req.body.recipeName}`,
    })
    .then((recipe) => res.send(recipe.url));
});

module.exports = router;
