require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT
const cors = require("cors");
const cloudinary = require("./cloudinary/cloudinary")

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true, limit: '50mb'}));

app.get("/", (req, res) => {
  res.send("Welcome to the homepage")
})

app.post("/", async (req, res) => {
  console.log(req.body);
  const { image } = req.body;

  const uploadedImage = await cloudinary.uploader.upload(image,
  { 
    upload_preset: 'unsigned_uploads',
    allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'ico', 'jfif', 'webp']
   }, 
  function(error, result) {
    if(error) {
      console.log(error)
    } else {
      console.log(result); 
    }
  });

  try {
    res.status(200).json(uploadedImage)
  } catch(err) {
    console.log(err)
  }

})

app.listen(port, console.log(`listening on port ${port}`))