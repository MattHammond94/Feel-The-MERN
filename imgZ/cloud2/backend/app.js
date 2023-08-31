const express = require('express');
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json({  limit: "25mb"}));
app.use(express.urlencoded({  limit: "25mb" }));

app.listen(44444, console.log('Listening on port 44444'));