const fs = require("fs");
const axios = require("axios");
const URL = "https://itunes.apple.com/search";

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

const addToFav = async (req, res) => {
  const { id } = req.query;
  // await axios.get(URL + `?term=${term}&media=${media}`).then((data) => {
  const results = await axios.get(
    "https://itunes.apple.com/search?term=all&media=all"
  );

  //    console.log( results.data.results);

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

// const removeFromFav = async (req, res) => {
//   await axios.get(URL + `?term=${term}&media=${media}`).then((data) => {
//     media = data.data;
//   });
//   res.status(200).json(media);
// };

module.exports = {
  addToFav,
  //   removeFromFav,
};
