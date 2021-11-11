const express = require("express");
const { getAllMedia } = require("./../controllers/media");

const media = express.Router();

media.get("/", getAllMedia);


module.exports = media;