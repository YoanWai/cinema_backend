const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    name: String,
    year: Number,
    rating: Number,
    genres: Array,
    image: String,
    description: String,
  },
  { versionKey: false }
);

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;
