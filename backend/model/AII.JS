const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product name"],
    },
    price: {
        type: Number,
        required: [true, "Please enter product price"],
        max_length: [8, "Price cannot exceed 8 characters"]
    },
    description: {
        type: String,
        required: [true, "Please enter product description"],
    },
    category:{
        type:String,
        required:[true, "Please enter product category"],
    },
    images: [{
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    }],
    rating: {
        type: Number,
        default: 0,
    },
    stock:{
        type:Number,
        required:[true, "Please enter product stock"],
        max_length: [5, "Price cannot exceed 5 characters"],
        default:1
    },
    numberOfReviews:{
        type:Number,
        default:0
    },
    reviews:[{
        name:{
            type:String,
            required:true,
        },
        rating:{
            type:Number,
            required:true,
        },
        comment:{
            type:String,
            required:true
        }
    }],
    createdAt:{
        type:Date,
        default:Date.now
    }

});

module.exports =  mongoose.model("Product", productSchema);