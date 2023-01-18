require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require("./db");

//konekcija sa bazom
connection();

//
app.use(express.json());
app.use(cors());

//Komunikacija sa portom
const port = process.env.PORT || 8080;
app.listen(port, () => console.log('Listening on port ${port}...'));