const mongoose = require("mongoose");
const Grid = require("gridfs-stream");

require("dotenv").config();
const { DB_HOST, DB_PORT, DB_NAME } = process.env;

mongoose
  .connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    family: 4,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch(onMongooseError);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB database");

  // Create a GridFS stream
  gfs = Grid(db.db, mongoose.mongo);
  gfs.collection("uploads");
});

function onMongooseError(error) {
  console.error("mongoose failed to connect:", error);
  process.exit(1);
}

module.exports = db;
