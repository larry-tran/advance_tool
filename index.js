const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/note.route');
require("dotenv").config({ path: "./config.env" });

const MONGO_URL = process.env.MONGO_URL || 'mongodb+srv://larrytran49:larrytran49@larrytran.gdyab.mongodb.net/advance_tool?retryWrites=true&w=majority'
app.use(cors());
app.use(bodyParser.json());
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("DB is ready"))
  .catch((err) => console.log(err));

app.use('/notes', noteRoutes);

app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running on Port: 3000");
});

