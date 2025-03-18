const { Router } = require("express");
const moviesController = require("../controllers/moviesController");

const moviesRouter = Router();

moviesRouter.get("/movies", moviesController.getAllMovies);
moviesRouter.post("/movies", moviesController.addMovie);

module.exports = moviesRouter;
