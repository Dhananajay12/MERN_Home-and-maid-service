const mongooose = require('mongoose');

const userMassage = new mongooose.Schema({

    name: {
        type: String,

    },
    email: {
        type: String,

    },
    phone: {
        type: Number,

    },
    message: {
        type: String,

    },
    date: {
        type: Date,
        default: Date.now
    },

  


})
const Massage = mongooose.model('massage', userMassage);
module.exports = Massage;