const moviesController = (req, res) => {
  res
    .status(200)
    .send("Próximamente estarán disponibles los datos de películas");
};

module.exports = moviesController;
