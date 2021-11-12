const express = require("express");
const { addToFav,searchFunc } = require("./../controllers/fav");

const favorite = express.Router();

favorite.post("/", addToFav);
favorite.get("/search/:term", searchFunc)


module.exports = favorite;
