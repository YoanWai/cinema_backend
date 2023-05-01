const verifyToken = require("../utils/verifyTokenUtil");

const express = require("express");

const router = express.Router();

const MoviesBL = require("../business-logic-layer/moviesBL");

router.get("/", verifyToken, async (req, res) => {
  const movies = await MoviesBL.getAllMovies();
  res.status(200).json(movies);
});

router.get("/:id", verifyToken, async (req, res) => {
  const id = req.params.id;
  const movie = await MoviesBL.getMovieById(id);
  res.status(200).json(movie);
});

router.post("/", verifyToken, async (req, res) => {
  const movie = req.body;
  const newMovie = await MoviesBL.addMovie(movie);
  res.status(200).json(newMovie);
});

router.put("/:id", verifyToken, async (req, res) => {
  const id = req.params.id;
  const movie = req.body;
  const updatedMovie = await MoviesBL.updateMovie(id, movie);
  res.status(200).json(updatedMovie);
});

router.delete("/:id", verifyToken, async (req, res) => {
  const id = req.params.id;
  const deletedMovie = await MoviesBL.deleteMovie(id);
  res.status(200).json(deletedMovie);
});

module.exports = router;
