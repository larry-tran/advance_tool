const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const noteRoutes = require('../server/routes/note.route');
require("dotenv").config({ path: "./config.env" });

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb+srv://larrytran49:larrytran49@larrytran.gdyab.mongodb.net/advance_tool?retryWrites=true&w=majority'
app.use(cors());
app.use(bodyParser.json());
mongoose.connect(MONGO_URL, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.use('/notes', noteRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

