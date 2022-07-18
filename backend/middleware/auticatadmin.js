// const jwts = require("jsonwebtoken");
// const Admin = require('../model/userSchema');
// const express = require('express');
// var cookieParser = require('cookie-parser')
// var app = express()
// app.use(cookieParser())

// const authentadmin = async (req, res, next) => {
//     try {

//         const rootAdmin = await Admin.findOne({ email : email });
    
//         if (!rootUser) { throw new Error('User not found') }

//         req.tokens = tokens;
//         req.rootAdmin = rootAdmin;
//         req.adminID = rootAdmin._id;
//         next();


//     } catch (err) {
//         res.status(401).send('unauthorized :no token provided');
//         console.log(err);
//     }


// }

// module.exports = authentadmin;