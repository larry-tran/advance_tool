const fileModel = require("../models/file.model");
const auth = require('../middleware/jwt_auth');
const express = require('express');
const fileRoutes = express.Router();

fileRoutes.use(auth);

fileRoutes.route('/').post(function(req, res) {
    fileModel.find(req.body).populate('parentId').then(data=>{
        res.json(data);
    }).catch(err=>{
        console.log(err);
    })
});

// fileRoutes.route('/file/:id').get(function(req, res) {
//     let id = req.params.id;
//     fileModel.find(id).then(data=>{
//         res.json(data);
//     }).catch(err=>{
//         console.log(err);
//     })
// });

fileRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    fileModel.find({parentId: id}).populate('parentId').then(data=>{
        res.json(data);
    }).catch(err=>{
        console.log(err);
    })
});

fileRoutes.route('/add').post(function(req, res) {
    let file = new fileModel(req.body);
    file.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).send('adding new file failed ', err);
    });
});

module.exports = fileRoutes;