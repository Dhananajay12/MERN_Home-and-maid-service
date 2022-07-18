
const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const generateAuthToken = require('../model/userSchema');

const Razorpay = require('razorpay');
require('../app');
const User = require("../model/userSchema");
const authenticate = require('../middleware/authenticate');

const Order = require('../model/Orderss');
const Massage = require('../model/Massage');
const book = require('../model/Book');
const delivary = require('../model/Delivery');
const Professional = require('../model/Professional');
const Local = require('../model/Local');




router.get('/', (req, res) => {
    res.send('Hello');
});


router.post('/register', async (req, res) => {

    const { name, email, phone, password, cpassword, city , state , address } = req.body;

    if (!name || !email || !phone || !password || !cpassword || !address || !city || !state) {

        return res.status(400).json({ error: " plz fill data" });
    }

    try {

        const userEXist = await User.findOne({ email: email });

        if (userEXist) {
            return res.status(422).json({ error: "Email Already Exist" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "password are not Exist" });
        } else {
            const user = new User({ name, email, phone, password, cpassword, address,city, state });

            await user.save();

            res.status(201).json({ message: "user registered successfuly" });

        }


    } catch (err) {

        console.log(err);
    }

});


// router.post('/admin-register', async (req, res) => {

//     const {  email , password, cpassword} = req.body;

//     if ( !email || !password || !cpassword ) {

//         return res.status(400).json({ error: " plz fill data" });
//     }

//     try {

//         const userEXist = await Admin.findOne({ email: email });

//         if (userEXist) {
//             return res.status(422).json({ error: "admin email Already Exist" });
//         } else if (password != cpassword) {
//             return res.status(422).json({ error: "password are not Exist" });
//         } else {
//             const user = new Admin({ email, password, cpassword});

//             await user.save();

//             res.status(201).json({ message: "admin registered successfuly" });

//         }

//     } catch (err) {

//         console.log(err);
//     }

// });

router.post('/signin', async (req, res) => {

    try {
        let token;
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: " plz fill data" });
        }

        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);

             res.cookie("jwtoken", token, {
                expries: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if (!isMatch) {
                res.status(400).json({ error: "Invalid Creadientials pass" });
            } else {
                res.json({ message: "user Signin Successfully" });

            }


        } else {
            res.status(400).json({ error: "Invalid Creadientials" });
        }


    } catch (err) {
        console.log(err);

    }
})

// router.post('/admin-signin', async (req, res) => {

//     try {
//         let token;
//         const { email, password } = req.body;

//         if (!email || !password) {
//             return res.status(400).json({ error: " plz fill data" });
//         }

//         const userLogin = await Admin.findOne({ email: email });

//         if (userLogin) {
//             const isMatch = await bcrypt.compare(password, userLogin.password);

//             token = await userLogin.generateAuthTokenAdmin();
//             console.log(token);

//              res.cookie("jwtoken", token, {
//                 expries: new Date(Date.now() + 25892000000),
//                 httpOnly: true
//             });

//             if (!isMatch) {
//                 res.status(400).json({ error: "Invalid Creadientials pass" });
//             } else {
//                 res.json({ message: "user Signin Successfully" });

//             }

//         } else {
//             res.status(400).json({ error: "Invalid Creadientials" });
//         }
//     } catch (err) {
//         console.log(err);

//     }
// })





router.post('/delivery', async (req, res) => {

    
    try {

        const { name, id, area, amount, email, phone, stime, etime, date, address , service } = req.body;
        
        if (!name || !id || !email || !phone || !amount || !area || !stime || !etime || !date || !address || !service) {
            console.log("Fill data plz")
        }

        const userDelivery = new delivary({ name, id, area, amount, email, phone, stime, etime, date, address , service });
      
        await userDelivery.save();
        if(userDelivery){
            console.log(userDelivery);
        }
        res.send({
            msg: 'delivery  was successfull',
           
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/application', async (req, res) => {
    try {

        const { name, qualification, area, language, email, phone, religion, service, expirence, age ,gender , address  , message , status} = req.body;

         console.log(req.body);

         if (!name || !qualification || !phone || !email || !address || !message || !age || !gender || !language || !religion || !service || !expirence || !status || !area) {
             console.log("plz fill data");
          }
        const userPro = new Professional({ name, qualification, area, language, email, phone, religion, service, expirence, age ,gender , address  , message , status });

        await userPro.save();
        res.send({
            msg: 'application sucess  was successfull',
            
        });

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});



// router.post('/order', async (req, res) => {

//     const { name, service , catagory, price} = req.body;

//     if (!name || !service || !catagory || !price) {

//         return res.status(400).json({ error: " plz fill data" });
//     }

//     try {

//             const user = new Order({ name, service , catagory, price });

//             await user.save();

//             res.status(201).json({ message: "Order succesfully store" });



//     } catch (err) {

//         console.log(err);
//     }

// });

router.post('/order', async (req, res) => {
    try {

        const { id, amount, razorpayPaymentId, razorpayOrderId, razorpaySignature } =
            req.body;

        const newOrder = Order({
            ID: id,
            isPaid: true,
            amount: amount,
            orderId: razorpayOrderId,
            paymentId: razorpayPaymentId,
            signature: razorpaySignature,

        });
        await newOrder.save();
        res.send({
            msg: 'Payment was successfull',
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});


router.get("/get-order", async (req, res) => {
    try {
        const userOrder = await Order.find();
        res.status(201).json(userOrder)

    } catch (error) {
        res.status(422).json(error);
    }
})

router.get("/get-application", async (req, res) => {
    try {
        const userApp = await Professional.find();
        res.status(201).json(userApp)

    } catch (error) {
        res.status(422).json(error);
    }
})


router.get("/get-delivary", async (req, res) => {
    try {
        const userDelivary = await delivary.find();
        res.status(201).json(userDelivary)

    } catch (error) {
        res.status(422).json(error);
    }
})

router.get("/get-book", async (req, res) => {
    try {
        const userDelivary = await book.find();
        res.status(201).json(userDelivary)

    } catch (error) {
        res.status(422).json(error);
    }
})

router.get("/get-massage", async (req, res) => {
    try {
        const userMessage = await Massage.find();
        res.status(201).json(userMessage)
 
    } catch (error) {
        res.status(422).json(error);
    }
})
router.get("/get-local", async (req, res) => {
    try {
        const userlocal = await Local.find();
        res.status(201).json(userlocal)
 
    } catch (error) {
        res.status(422).json(error);
    }
})

router.get("/payment", async (req, res) => {

    const getPayment = await Order.findOne({ ID: req.userID });
    if (getPayment) {
        res.status(201).json(getPayment)
        console.log(getPayment);
    }
    else {
        res.status(422).json(error);

    }


})








//about
router.get('/about', authenticate, (req, res) => {
    console.log(`okay`);
    res.send(req.rootUser);
});
//contactfeed
router.get('/getdata', authenticate, (req, res) => {
    console.log(`okay`);
    res.send(req.rootUser);
});

router.get('/logout', (req, res) => {
    console.log(`logout`);
    res.clearCookie('jwtoken', { path: '/' })
    res.status(200).send('User Logout');


    res.send(req.rootUser);
});

// router.get('/admin-logout', (req, res) => {
//     console.log(`logout`);
//     res.clearCookie('jwtokens', { path: '/loginadmin' })
//     res.status(200).send('User Logout');

//     res.send(req.rootAdmin);
// });



// router.get("/get-admin", async (req, res) => {
//     try {
//         res.send(req.rootAdmin);
//         console.log(req.rootAdmin);
//     } catch (error) {
//         res.status(422).json(error);
//     }
// })


router.get("/users" , async (req, res) => {
    try {
        const userdata = await User.find();
        res.status(201).json(userdata)

    } catch (error) {
        res.status(422).json(error);
    }
})

// get individual user

router.get("/getuser/:id", async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;

        const userindividual = await User.findById({ _id: id });

        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})

//edit product


//edituser
router.patch("/updateuser/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const updateduser = await User.findByIdAndUpdate(id, req.body, {
            new: true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
})


router.delete("/deleteuser/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const deletuser = await User.findByIdAndDelete({ _id: id })
        res.status(201).json(deletuser);

    } catch (error) {
        res.status(422).json(error);
    }
})


//contactus
// router.post('/touch', authenticate, async (req, res) => {
//     try {
//         const { name, email, phone, message } = req.body;


//         if (!name || !email || !phone || !message) {
//             console.log("error in contact form");
//             return res.json({ error: "plz filled the contact form" });
//         }
//         const userContact = await User.findOne({ _id: req.userID });

//         if (userContact) {
//             const userMessage = await userContact.addMessage(name, email, phone, message);

//             await userContact.save();

//             res.status(201).json({ message: "user Concat successfully" });
//         }


//     } catch (err) {
//         console.log(error);
//     }

// });
//address
// router.post('/address', authenticate, async (req, res) => {
//     try {
//         const {address } = req.body;


//         if (!address) {
//             console.log("error in contact form");
//             return res.json({ error: "plz filled the contact form" });
//         }
//         const userAddress = await User.findOne({ _id: req.userID });

//         if (userAddress) {
//             const userMessage = await userAddress.addAddress(address);

//             await userAddress.save();

//             res.status(201).json({ message: "user Concat successfully" });
//         }

//     } catch (err) {
//         console.log(error);
//     }


// });

router.put('/edit', authenticate, async (req, res) => {

    const user = await User.findOne({ _id: req.userID });

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.phone = req.body.phone || user.phone;
        user.address = req.body.address || user.address;
        user.city = req.body.city || user.city;
        user.state = req.body.state || user.state;

        if (req.body.password) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save();
        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            phone: updatedUser.phone,
            address: updatedUser.address,
            city: updatedUser.city,
            state: updatedUser.state,

            token: generateAuthToken(updatedUser._id),
        });
    }
    else {
        res.status(404);
        throw new Error("User not found");
    }


});


router.get('/get-razorpay-key', authenticate, (req, res) => {
    res.send({ key: process.env.RAZORPAY_KEY_ID });
});

router.post('/create-order', authenticate, async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
        });
        const options = {
            amount: req.body.amount,
            currency: 'INR',
        };
        const order = await instance.orders.create(options);
        if (!order) return res.status(500).send('Some error occured');
        res.send(order);
    } catch (error) {
        res.status(500).send(error);
    }
});



// router.post('/pay-order',authenticate, async (req, res) => {

//     try {

//         const { amount, razorpayPaymentId, razorpayOrderId, razorpaySignature } = req.body;
//         console.log(amount);
//         console.log(razorpayPaymentId);
//         console.log(razorpayOrderId);
//         console.log(razorpaySignature);

//         if (!amount || !razorpayPaymentId || !razorpayOrderId || !razorpaySignature) {
//             console.log("error in contact form");
//             res.json({ error: "plz filled the contact form" });
//         }

//         const userText = await User.findOne({ _id: req.userID });

//         if (userText) {
//             const userPayment = await userText.addPayment(amount, razorpayPaymentId, razorpayOrderId, razorpaySignature);
//             await userText.save();

//             res.status(201).json({ message: "payment backend succesfukky" });
//         }


//     } catch (error) {
//         console.log(error);
//         res.status(500).send(error);
//     }
// });


router.post('/book-now', async (req, res) => {
    try {

        const { name, lastName, email, phone, service, area, address } = req.body;

        if (!name || !lastName || !email || !phone || !service || !area || !address) {
            console.log("Fill data plz")
        }

        const userBook = new book({ name, lastName, email, phone, service, area, address });

        await userBook.save();
        res.send({
            msg: 'Book was successfull',
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/local', async (req, res) => {
    try {

        const { name, email, phone, service, area, address } = req.body;

        if (!name || !email || !phone || !service || !area || !address) {
            console.log("Fill data plz")
        }

        const userlocal = new Local({ name,  email, phone, service, area, address });

        await userlocal.save();
        res.send({
            msg: 'Book was successfull',
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});



router.post('/massage', async (req, res) => {
    try {

        const { name, email, phone, message } = req.body;

        if (!name || !email || !phone || !message) {
            console.log("Fill data plz")
        }

        const userMassage = new Massage({ name, email, phone, message });

        await userMassage.save();
        res.send({
            msg: 'masssage was successfull',
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});



router.get("/get-order", async (req, res) => {
    try {
        const userOrder = await Order.find();
        res.status(201).json(userOrder)

    } catch (error) {
        res.status(422).json(error);
    }
})


router.get('/list-orders', authenticate, async (req, res) => {
    const orders = await User.find();
    res.send(orders);
});





module.exports = router;  