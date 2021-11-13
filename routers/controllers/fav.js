const fs = require("fs");
const axios = require("axios");

let fav = [];

fs.readFile("./db/fav.json", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    fav = JSON.parse(data.toString());
  }
});

function createFav(fav) {
  fs.writeFile("./db/fav.json", JSON.stringify(fav), (err) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      console.log("Created successfully ✅");
    }
  });
}

const addToFavMovie = async (req, res) => {
  const { id } = req.query;
  const results = await axios.get(
    "https://itunes.apple.com/search?term=all&media=movie&limit=10"
  );

  let found = fav.find((item) => {
    return id == item.trackId;
  });

  let movie = results.data.results.find((item) => {
    return id == item.trackId;
  });

  if (found) {
    res.status(200).json("already exist");
  } else {
    if (movie) {
      fav.push(movie);
      createFav(fav);
    }
    res.status(200).json(fav);
  }
};

const addToFavPodcast = async (req, res) => {
  const { id } = req.query;
  const results = await axios.get(
    "https://itunes.apple.com/search?term=all&media=podcast&limit=10"
  );

  let found = fav.find((item) => {
    return id == item.trackId;
  });

  let podcast = results.data.results.find((item) => {
    return id == item.trackId;
  });

  if (found) {
    res.status(200).json("already exist");
  } else {
    if (podcast) {
      fav.push(podcast);
      createFav(fav);
    }
    res.status(200).json(fav);
  }
};

const addToFavMusic = async (req, res) => {
  const { id } = req.query;
  const results = await axios.get(
    "https://itunes.apple.com/search?term=all&media=music&limit=10"
  );

  let found = fav.find((item) => {
    return id == item.trackId;
  });

  let music = results.data.results.find((item) => {
    return id == item.trackId;
  });

  if (found) {
    res.status(200).json("already exist");
  } else {
    if (music) {
      fav.push(music);
      createFav(fav);
    }
    res.status(200).json(fav);
  }
};

const addToFavMusicVideo = async (req, res) => {
  const { id } = req.query;
  const results = await axios.get(
    "https://itunes.apple.com/search?term=all&media=musicVideo&limit=10"
  );

  let found = fav.find((item) => {
    return id == item.trackId;
  });

  let musicVideo = results.data.results.find((item) => {
    return id == item.trackId;
  });

  if (found) {
    res.status(200).json("already exist");
  } else {
    if (musicVideo) {
      fav.push(musicVideo);
      createFav(fav);
    }
    res.status(200).json(fav);
  }
};

const addToFavAudiobook = async (req, res) => {
  const { id } = req.query;
  const results = await axios.get(
    "https://itunes.apple.com/search?term=all&media=audiobook&limit=10"
  );

  let found = fav.find((item) => {
    return id == item.trackId;
  });

  let audiobook = results.data.results.find((item) => {
    return id == item.trackId;
  });

  if (found) {
    res.status(200).json("already exist");
  } else {
    if (audiobook) {
      fav.push(audiobook);
      createFav(fav);
    }
    res.status(200).json(fav);
  }
};

const addToFavShortFilm = async (req, res) => {
  const { id } = req.query;
  const results = await axios.get(
    "https://itunes.apple.com/search?term=all&media=shortFilm&limit=10"
  );

  let found = fav.find((item) => {
    return id == item.trackId;
  });

  let shortFilm = results.data.results.find((item) => {
    return id == item.trackId;
  });

  if (found) {
    res.status(200).json("already exist");
  } else {
    if (shortFilm) {
      fav.push(shortFilm);
      createFav(fav);
    }
    res.status(200).json(fav);
  }
};

const addToFavTvShow = async (req, res) => {
  const { id } = req.query;
  const results = await axios.get(
    "https://itunes.apple.com/search?term=all&media=tvShow&limit=10"
  );

  let found = fav.find((item) => {
    return id == item.trackId;
  });

  let tvShow = results.data.results.find((item) => {
    return id == item.trackId;
  });

  if (found) {
    res.status(200).json("already exist");
  } else {
    if (tvShow) {
      fav.push(tvShow);
      createFav(fav);
    }
    res.status(200).json(fav);
  }
};

const addToFavSoftware = async (req, res) => {
  const { id } = req.query;
  const results = await axios.get(
    "https://itunes.apple.com/search?term=all&media=software&limit=10"
  );

  let found = fav.find((item) => {
    return id == item.trackId;
  });

  let software = results.data.results.find((item) => {
    return id == item.trackId;
  });

  if (found) {
    res.status(200).json("already exist");
  } else {
    if (software) {
      fav.push(software);
      createFav(fav);
    }
    res.status(200).json(fav);
  }
};

const addToFavEbook = async (req, res) => {
  const { id } = req.query;
  const results = await axios.get(
    "https://itunes.apple.com/search?term=all&media=ebook&limit=10"
  );

  let found = fav.find((item) => {
    return id == item.trackId;
  });

  let ebook = results.data.results.find((item) => {
    return id == item.trackId;
  });

  if (found) {
    res.status(200).json("already exist");
  } else {
    if (ebook) {
      fav.push(ebook);
      createFav(fav);
    }
    res.status(200).json(fav);
  }
};

const removeFromFav = (req, res) => {
  const { id } = req.query;

  let found = false;

  fav.forEach((element) => {
    if (id == element.trackId) {
      fav.splice(element, 1);
      found = true;
    }
  });

  if (found) {
    fs.writeFile("./db/fav.json", JSON.stringify(fav), (err) => {
      if (err) {
        res.status(400).json("bad request");
      } else {
        res.status(200).json(fav);
      }
    });
  } else {
    res.status(404).json("movie not found");
  }
};

const getFavorite = (req, res) => {
  res.status(200).json(fav);
};

module.exports = {
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
  removeFromFav,
};
