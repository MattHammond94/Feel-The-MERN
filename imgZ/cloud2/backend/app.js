const express = require('express');
const cors = require("cors");
const uploadImage = require("./uploadImage");

const app = express();

app.use(cors());
app.use(express.json({  limit: "25mb"}));
app.use(express.urlencoded({  limit: "25mb" }));

app.post('/uploadImage', (req, res) => {

  uploadImage(req.body.image)
    .then((url) => res.send(url))
    .catch((err) => res.status(500).send(err));
});

app.listen(44444, console.log('Listening on port 44444'));