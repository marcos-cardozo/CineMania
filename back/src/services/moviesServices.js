const { Movie } = require("../models/Movie");

const getMovies = async () => {
  return await Movie.find();
};

const addMovie = async (movieData) => {
  const movie = new Movie(movieData);
  await movie.save();
};

module.exports = {
  getMovies,
  addMovie,
};
