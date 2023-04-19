const noteModel = require("../models/note.model");
const auth = require('../middleware/jwt_auth');

const express = require('express');
const noteRoutes = express.Router();

// noteRoutes.use(auth);

// noteRoutes.route('/').get(function(req, res) {
//     noteModel.find().then(data=>{
//         res.json(data);
//     }).catch(err=>{
//         console.log(err);
//     })
// });

noteRoutes.route('/file/:id').get(function(req, res) {
    let id = req.params.id;
    noteModel.find({fileId: id}).then(data=>{
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