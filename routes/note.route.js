const noteModel = require("../models/note.model");
const express = require('express');
const noteRoutes = express.Router();

noteRoutes.route('/').get(function(req, res) {
    noteModel.find().then(data=>{
        res.json(data);
    }).catch(err=>{
        return;
    })
});

module.exports = noteRoutes;