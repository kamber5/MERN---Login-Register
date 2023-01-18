const mongoose = require("mongoose");

//Fix za error jer mongoose mjenja cijeli sistem u Mongoose 7
mongoose.set('strictQuery', false);


//Konekcija sa MongoDB databazom
module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        mongoose.connect(process.env.DB, connectionParams);
        console.log("Connected to database successfully");
    } catch (error){
        console.log(error);
        console.log("Could not connect to database");

    }
}