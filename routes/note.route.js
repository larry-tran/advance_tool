const noteModel = require("../models/note.model");
const express = require('express');
const noteRoutes = express.Router();

noteRoutes.route('/').get(function(req, res) {
    noteModel.find().then(data=>{
        res.json(data);
    }).catch(err=>{
        console.log(err);
    })
});

noteRoutes.route('/folder/:id').get(function(req, res) {
    let id = req.params.id;
    noteModel.find(id).then(data=>{
        res.json(data);
    }).catch(err=>{
        console.log(err);
    })
});

noteRoutes.route('/add').post(function(req, res) {
    let note = new noteModel(req.body);
    note.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).send('adding new note failed ', err);
    });
});

module.exports = noteRoutes;