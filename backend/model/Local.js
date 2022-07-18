const mongooose = require('mongoose');

const userlocal = new mongooose.Schema({
    name: {
        type:String,
    },
    email: {
        type:String,
    },
    phone: {
        
        type:Number,
    },
    service: {
        type:String,
    },
    area:{
        type:String,

    },
    address:{
        type:String,
    },
    date: {
        type: Date,
        default: Date.now
    },

  


})
const Local = mongooose.model('local', userlocal);
module.exports = Local;