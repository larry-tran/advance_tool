const folderModel = require("../models/folder.model");
const express = require('express');
const folderRoutes = express.Router();

folderRoutes.route('/').get(function(req, res) {
    folderModel.find().then(data=>{
        res.json(data);
    }).catch(err=>{
        console.log(err);
    })
});

folderRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    folderModel.findById(id).then(data=>{
        res.json(data);
    }).catch(err=>{
        console.log(err);
    })
});

folderRoutes.route('/add').post(function(req, res) {
    let folder = new folderModel(req.body);
    folder.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).send('adding new folder failed ', err);
    });
});

module.exports = folderRoutes;