const mongooose = require('mongoose');

const userDeliver = new mongooose.Schema({
    name: {
        type:String,
    },
    id:{
        type:String,
    }, 
    area:{
        type:String,
    },
    amount: {
        type:Number,
    },
    email: {
        type:String,
    },
    phone: {
        
        type:Number,
    },
    stime:{
        type:String,
    },
    etime:{
        type:String,
    },
    date:{    
        type:Date,

    },
    address:{
        type:String,
    },
    service:{
        type:String,
    },
    dates: {
        type: Date,
        default: Date.now
    },

})
const delivary = mongooose.model('delivery', userDeliver);
module.exports = delivary;