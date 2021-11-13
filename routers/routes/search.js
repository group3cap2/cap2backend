const express = require("express");
const { searchFunc } = require("./../controllers/search");

const search = express.Router();

search.get("/:term", searchFunc);

module.exports = search;