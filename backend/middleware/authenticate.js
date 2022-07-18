const jwt = require("jsonwebtoken");
const User = require('../model/userSchema');
const express = require('express');
var cookieParser = require('cookie-parser');
const Admin = require("../model/Admin");
var app = express()
app.use(cookieParser())

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });

        if (!rootUser) { throw new Error('User not found') }


        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
   
  
        next();


    } catch (err) {
        res.status(401).send('unauthorized :no token provided');
        console.log(err);
    }


}

module.exports = authenticate;