const { getMovies, addMovie } = require("../services/moviesServices");


module.exports = {
  getAllMovies: async (req, res) => {
    try {
      const movies = await getMovies();
      res.status(200).json(movies);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Lo sentimos, hubo un error al obtener las peliculas",
      });
    }
  },
  addMovie: async (req, res) => {
    try {
      const newMovie = req.body;
      await addMovie(newMovie);
      res.status(201).json({ message: "Película agregada con éxito" });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Lo sentimos, hubo un error al agregar la película",
      });
    }
  },
};
