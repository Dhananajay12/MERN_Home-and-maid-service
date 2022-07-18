const mongooose = require('mongoose');

const userBook = new mongooose.Schema({
    name: {
        type:String,
    },
    lastName: {
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
const book = mongooose.model('book', userBook);
module.exports = book;