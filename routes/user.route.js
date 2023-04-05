const userModel = require("../models/user.model");
const { BAD_REQUEST } = require("http-status");
const jwt = require("jsonwebtoken");
const express = require('express');
const bcrypt = require("bcrypt");
const userRoutes = express.Router();
const dotenv = require("dotenv");
dotenv.config();

userRoutes.route('/').get(function(req, res) {
    userModel.find().then(data=>{
        res.json(data);
    }).catch(err=>{
        console.log(err);
    })
});

userRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    userModel.findById(id).then(data=>{
        res.json(data);
    }).catch(err=>{
        console.log(err);
    })
});

userRoutes.route("/login").post(function (req, res) {
  const { name, password } = req.body;
  userModel
    .findOne({ name, password })
    .then((data) => {
        console.log(data);
      if (data) {
        if (comparePassword(password, hashPassword(password))) {
          const token = jwt.sign(
            { userId: data.__id },
            process.env.JWT_SECRET_KEY
          );
          res.json({ token });
        } else {
            res.status(BAD_REQUEST).json({ msg: "User is not matched" });
        }
      } else {
        res.status(BAD_REQUEST).json({ msg: "User is not found" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

userRoutes.route('/add').post(function(req, res) {
    const {name, password} = req.body;
    const hashPass = hashPassword(password);
    let user = new userModel({name, password: hashPass});
    console.log(user);
    user.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).send('adding new user failed ', err);
    });
});

const comparePassword = (raw, hashed) => {
	return bcrypt.compareSync(raw, hashed);
};

const hashPassword = (raw) => {
	return bcrypt.hashSync(raw, 12);
};

module.exports = userRoutes;