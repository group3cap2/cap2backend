const express = require("express");
const {
  getAllMedia,
  getAllMovie,
  getAllPodcast,
  getAllMusic,
  getAllMusicVideo,
  getAllAudiobook,
  getAllShortFilm,
  getAllTvShow,
  getAllSoftware,
  getAllEbook,
} = require("./../controllers/media");

const media = express.Router();

media.get("/", getAllMedia);

media.get("/movie", getAllMovie);

media.get("/podcast", getAllPodcast);

media.get("/music", getAllMusic);

media.get("/musicVideo", getAllMusicVideo);

media.get("/audiobook", getAllAudiobook);

media.get("/shortFilm", getAllShortFilm);

media.get("/tvShow", getAllTvShow);

media.get("/software", getAllSoftware);

media.get("/ebook", getAllEbook);

module.exports = media;
