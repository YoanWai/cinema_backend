const ImageModel = require("../data-access-layer/models/imageModel");

const getImages = async () => {
  return await ImageModel.find({});
};

const getImageById = async (id) => {
  return await ImageModel.findById(id);
};

const addImage = async (image) => {
    const newImage = new ImageModel(image);
    return await newImage.save();
};

const updateImage = async (id, image) => {
  return await ImageModel.findByIdAndUpdate(id, image);
};

const deleteImage = async (id) => {
  return await ImageModel.findByIdAndDelete(id);
};

module.exports = {
  getImages,
  getImageById,
  addImage,
  updateImage,
  deleteImage,
};
