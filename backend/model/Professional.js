
const mongooose = require('mongoose');

const userPro = new mongooose.Schema({


    name: {
        type: String,

    },
    qualification:{
        type:String,
    },
    area:{
        type:String 
    },
    language:{
        type:String
    },
    status:{
        type:String
    },
    religion:{
       type:String
    },
    service:{
        type:String

    },
    expirence:{
       type:String,

    },
    age:{
        type:Number,
    },
    gender:{
        type:String,
    }, 
    email: {
        type: String,

    },
    phone: {
        type: Number,
     
    },
    address: {
        type: String, 
    },
    message:{
        type:String,
    },
    date: {
        type: Date,
        default: Date.now
    },


})

const Professional = mongooose.model('professional', userPro);
module.exports = Professional;
