const  axios  = require("axios");

const getAllMedia = async (req, res) => {
  await axios
    .get("https://itunes.apple.com/search?term=all&media=all&limit=10")
    .then((data) => {
        media = data.data;
    });
    res.status(200).json(media);
};

module.exports = { getAllMedia };