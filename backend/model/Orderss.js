
const mongooose = require('mongoose');

const order = new mongooose.Schema({

    ID: {
        type: String,

    },
    isPaid: {
        type: Boolean,

    },
    amount: {
        type: Number,

    },
    orderId: {
        type: String,

    },
    paymentId: {
        type: String,

    },
    signature: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },



})
const Order = mongooose.model('order', order);
module.exports = Order;