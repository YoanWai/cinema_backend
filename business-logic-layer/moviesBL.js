const MovieModel = require("../data-access-layer/models/movieModel");

const getAllMovies = async () => {
  return await MovieModel.find({});
};

const getMovieById = async (id) => {
  return await MovieModel.findById(id);
};

const addMovie = async (movie) => {
  const newMovie = new MovieModel(movie);
  return await newMovie.save();
};

const updateMovie = async (id, movie) => {
  return await MovieModel.findByIdAndUpdate(id, movie);
};

const deleteMovie = async (id) => {
  return await MovieModel.findByIdAndDelete(id);
};

module.exports = {
  getAllMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
};


