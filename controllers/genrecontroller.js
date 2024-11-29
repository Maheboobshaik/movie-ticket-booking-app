
const Genre = require('../models/genremodel');

exports.findAllGenres = async (req, res) => {


    const genres = await Genre.find();
    res.json(genres);
  };