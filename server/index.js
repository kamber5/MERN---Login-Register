require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const listUserRoutes = require("./routes/listUsers");
const authRoutes = require("./routes/auth");

//konekcija sa bazom
connection();

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/listUsers", listUserRoutes);


//Komunikacija sa portom
const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
