const express = require("express");
const {
  addToFavMovie,
  addToFavPodcast,
  addToFavMusic,
  addToFavMusicVideo,
  addToFavAudiobook,
  addToFavShortFilm,
  addToFavTvShow,
  addToFavSoftware,
  addToFavEbook,
  getFavorite,
  removeFromFav
} = require("./../controllers/fav");

const favorite = express.Router();

favorite.post("/movie", addToFavMovie);

favorite.post("/podcast", addToFavPodcast);

favorite.post("/music", addToFavMusic);

favorite.post("/musicVideo", addToFavMusicVideo);

favorite.post("/audiobook", addToFavAudiobook);

favorite.post("/shortFilm", addToFavShortFilm);

favorite.post("/tvShow", addToFavTvShow);

favorite.post("/software", addToFavSoftware);

favorite.post("/ebook", addToFavEbook);

favorite.delete("/:id", removeFromFav);

favorite.get("/", getFavorite);

module.exports = favorite;
