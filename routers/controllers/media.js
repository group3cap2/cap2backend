const axios = require("axios");

const getAllMedia = async (req, res) => {
  await axios
    .get("https://itunes.apple.com/search?term=all&media=all&limit=10")
    .then((data) => {
      media = data.data;
    });
  res.status(200).json(media);
};

const getAllMovie = async (req, res) => {
  await axios
    .get("https://itunes.apple.com/search?term=all&media=movie&limit=10")
    .then((data) => {
      movie = data.data;
    });
  res.status(200).json(movie);
};

const getAllPodcast = async (req, res) => {
  await axios
    .get("https://itunes.apple.com/search?term=all&media=podcast&limit=10")
    .then((data) => {
      podcast = data.data;
    });
  res.status(200).json(podcast);
};

const getAllMusic = async (req, res) => {
  await axios
    .get("https://itunes.apple.com/search?term=all&media=music&limit=10")
    .then((data) => {
      music = data.data;
    });
  res.status(200).json(music);
};

const getAllMusicVideo = async (req, res) => {
  await axios
    .get("https://itunes.apple.com/search?term=all&media=musicVideo&limit=10")
    .then((data) => {
      musicVideo = data.data;
    });
  res.status(200).json(musicVideo);
};

const getAllAudiobook = async (req, res) => {
  await axios
    .get("https://itunes.apple.com/search?term=all&media=audiobook&limit=10")
    .then((data) => {
      audiobook = data.data;
    });
  res.status(200).json(audiobook);
};

const getAllShortFilm = async (req, res) => {
  await axios
    .get("https://itunes.apple.com/search?term=all&media=shortFilm&limit=10")
    .then((data) => {
      shortFilm = data.data;
    });
  res.status(200).json(shortFilm);
};

const getAllTvShow = async (req, res) => {
  await axios
    .get("https://itunes.apple.com/search?term=all&media=tvShow&limit=10")
    .then((data) => {
      tvShow = data.data;
    });
  res.status(200).json(tvShow);
};

const getAllSoftware = async (req, res) => {
  await axios
    .get("https://itunes.apple.com/search?term=all&media=software&limit=10")
    .then((data) => {
      software = data.data;
    });
  res.status(200).json(software);
};

const getAllEbook = async (req, res) => {
  await axios
    .get("https://itunes.apple.com/search?term=all&media=ebook&limit=10")
    .then((data) => {
      ebook = data.data;
    });
  res.status(200).json(ebook);
};

module.exports = {
  getAllMedia,
  getAllMovie,
  getAllPodcast,
  getAllMusic,
  getAllMusicVideo,
  getAllAudiobook,
  getAllShortFilm,
  getAllTvShow,
  getAllSoftware,
  getAllEbook
};
