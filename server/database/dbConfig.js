// used mongoose (ORM) since used to RDMS, good to have a relational schema
const mongoose = require("mongoose");
require('dotenv').config();

const connectToDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.mongodb_uri);
        console.log("Connected to Shyftlabs Database");
        console.log(connection.connection.host);
    }
    catch (err) {
        console.log("Connection Error", err);
    }
}

module.exports = connectToDB;