require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require("./db");
const refreshTokenRoutes = require ('./routes/refreshToken.js');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

//konekcija sa bazom
connection();

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/api", authRoutes);
app.use("/api/refreshToken", refreshTokenRoutes);
app.use("/api/users", userRoutes);

//Komunikacija sa portom
const port = process.env.PORT || 8080;
app.listen(port, () => console.log('Listening on port ${port}...'));