require("dotenv").config();

const cloudinary = require("cloudinaery").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto"
};

// image is a BASE64 format type - BASE64 is binary to text endocing schemes
// Tranfsers an image into a set/sequence of string characters - 'ASCII' chars
module.exports = (image) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(image, opts, (error, result) => {
      if (result && result.secure_url) {
        console.log(result.secure_url);
        return resolve(result.secure_url)
      }
      console.log(error.message);
      return reject({ message: error.message });
    })
  });
}