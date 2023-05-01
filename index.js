const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");

require("dotenv").config();
validateEnvironmentOrDie();
require("./config/database");

app.use(cors());
app.use(express.json());

const usersRouter = require("./routers/usersRouter");
const moviesRouter = require("./routers/moviesRouter");
const membersRouter = require("./routers/membersRouter");
const subscriptionsRouter = require("./routers/subscriptionsRouter");
const imagesRouter = require("./routers/imagesRouter");

app.use("/users", usersRouter);
app.use("/movies", moviesRouter);
app.use("/members", membersRouter);
app.use("/subscriptions", subscriptionsRouter);
app.use("/images", imagesRouter);

app.listen(5000, () => {
  console.log("Server listening on port 5000!");
});

/**
 * makes sure process.env object contains
 * every variables requried for the server to run
 */
function validateEnvironmentOrDie(exitCode = 1) {
  const requiredKeys = [
    "LISTEN_PORT",
    "DB_NAME",
    "DB_HOST",
    "DB_PORT",
    "JWT_SECRET",
  ];
  const missingKeys = [];
  for (const key of requiredKeys) {
    if (!(key in process.env)) {
      missingKeys.push(key);
    }
  }

  if (!missingKeys.length) {
    return true;
  }

  console.error("missing required keys at .env file:", missingKeys);
  process.exit(exitCode);
}

process.on("unhandledRejection", (error) => {
  console.error("unhandledRejection", error);
});
