const jwt = require('jsonwebtoken');
const mongooose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Col } = require('react-bootstrap');

const userSchema = new mongooose.Schema({

    name: {
        type: String,
  
    },
    email: {
        type: String,
    
    },
    phone: {
        type: Number,
     
    },
    password: {
        type: String,
      
    },
    cpassword: {
        type: String,
      
    },
    address: {
        type: String,
       
    },
    city:{
        type: String,
    },
    state:{
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },

    // messages: [
    //     {
    //         name: {
    //             type: String,
             
    //         },
    //         email: {
    //             type: String,
               
    //         },
    //         phone: {
    //             type: Number,
               
    //         },
    //         message: {
    //             type: String,
                
    //         }

    //     }

    // ],
    // payments: [
    //     {
    //         amounts:{
    //             type: Number,
            
    //         },
    //         paymentId: {
    //             type: String,
             
    //         },
    //         orderId: {
    //             type: String,
             
    //         },
    //         signature: {
    //             type: String,
           
    //         }

    //     }

    // ],
    tokens: [
        {
            token: {
                type: String,
              
            }
        }
    ],
    // addresss:[

    //     {

    //         address:{
    //              type:String,

    //         }
    //     }
    // ],
   







})


// hashing the password 

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
});
//generate token
userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }

}
//stored the message
// userSchema.methods.addMessage = async function (name, email, phone, message) {
//     try {
//         this.messages = this.messages.concat({ name, email, phone, message })
//         await this.save();
//         return this.messages;
//     } catch (error) {
//         console.log(error)
//     }

// }
// userSchema.methods.addPayment = async function (amounts, paymentId, orderId, signature) {
    
//     try {
//         this.payments = this.payments.concat({ amounts, paymentId, orderId, signature })
//         await this.save();
//         console.log(this.payments);
//         return this.payments;
//     } catch (error) {
//         console.log(error)
//     }

// }

// userSchema.methods.addAddress = async function (address) {
//     try {
//         this.addresss = this.addresss.concat({ address})
//         await this.save();
//         return this.addresss;
//     } catch (error) {
//         console.log(error)
//     }

// }



const User = mongooose.model('USER', userSchema);
module.exports = User;