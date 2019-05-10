const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Set up body parser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// Get Database URI
const db = require("./config/keys").mongoURI;

// Connect to Mongo
mongoose.connect(
        db, {
            useNewUrlParser: true
        }
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

// Setup port to 5000 unless deployed to Heroku then use its port.
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server.js is running on port ${port}.`));