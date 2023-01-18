import pkg from 'Express';
const express = pkg;

import mysql from 'mysql';

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"allah01",
    database:"dbzalihe_220"
})

app.get("/", (req, res) => {
    res.json("Radiiiiii!!!!")
})

app.listen(8800, () => {
    console.log("Connected to backend!")
})