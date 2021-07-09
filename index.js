require("dotenv").config({});
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 1337;
const restaurantRouter = require("./Routers/restaurantRouter");
const ingredientRouter = require("./Routers/ingredientRouter");
const recipeRouter = require("./Routers/recipeRouter");
const uploadRouter = require("./Middlewares/uploadRouter");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, console.log(`server is listening to port ${PORT}`));

app.use(express.json({ limit: "5mb" }));
app.use(cors());
app.use("/api/restaurant", restaurantRouter);
app.use("/api/ingredients", ingredientRouter);
app.use("/api/recipe", recipeRouter);
app.use("/api/upload", uploadRouter);
