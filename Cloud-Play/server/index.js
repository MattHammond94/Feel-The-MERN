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
  res.json("Data received")
})

app.listen(port, console.log(`listening on port ${port}`))