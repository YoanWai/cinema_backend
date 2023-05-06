const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const checkFileType = function (file, cb) {
  const fileTypes = /jpeg|jpg|png|gif|svg/;

  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());

  const mimeType = fileTypes.test(file.mimetype);

  if (mimeType && extName) {
    return cb(null, true);
  } else {
    cb("Error: You can Only Upload Images!!");
  }
};

const storageEngine = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images/"); // Directory to store images
  },
  filename: function (req, file, cb) {
    cb(null, req.params.userId + ".jpg");
  },
});

const upload = multer({
  storage: storageEngine,
  limits: { fileSize: 256000000 },
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
});

router.post("/:userId", upload.single("image"), (req, res) => {
  if (!req.file) {
    res.status(400).json({ message: req });
    return;
  }

  res.json({
    message: "Image uploaded successfully",
    filename: req.file.filename,
  });
});

router.get("/:userId", (req, res) => {
  const { userId } = req.params;
  const profilePicturePath = path.join(__dirname, "../images", `${userId}.jpg`);
  res.status(200).sendFile(profilePicturePath);
});

module.exports = router;
