const searchFunc = (req, res) => {
  const term = req.params.term;
  let result = {};
  itunesApiSearch
    .search(
      term,
      {
        limit: 50,
        country: "BR",
      },
      function (err, res) {
        if (err) {
          res.status(400).json(err);
          return;
        }
        result = res;
        console.log(result);
      }
    )
    .then(() => {
      res.status(201).json(result);
    });
};

module.exports = {searchFunc};
