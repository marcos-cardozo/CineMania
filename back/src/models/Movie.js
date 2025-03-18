const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: true,
    min: [5, "El titulo de la pelicula no puede contener menos de 5 caracteres"],
  },
  year: Number,
  director: String,
  duration: String,
  genre: [String], 
  rate: Number,
  poster: String,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = { Movie };
