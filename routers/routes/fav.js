const express = require("express");
const { addToFav } = require("./../controllers/fav");

const favorite = express.Router();

favorite.post("/", addToFav);

module.exports = favorite;
