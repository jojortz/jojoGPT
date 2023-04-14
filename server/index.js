const express = require("express");
const path = require("path");
const axios = require('axios');
require("dotenv").config();
const app = express();

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());


const host_url = 'http://localhost';
const port = 3004;

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname,'../client/dist/index.html'));
});

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});