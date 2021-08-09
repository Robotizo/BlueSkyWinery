import express from "express";
import mongoose from 'mongoose';
import wineRouter from "./routers/wineRouter.js";
import userRouter from "./routers/userRouter.js";
import dotenv from 'dotenv';
import orderRouter from "./routers/orderRouter.js";
import Stripe from "stripe";
import path from 'path';

dotenv.config();


const app = express();

// const stripe = require("stripe")("sk_test_51IplL2C37SytJ6awuAIVFongzAgy6cL1RhXQFRDwKGWL5LFgjUI0SZdvucdKAgzmQyxvCcyLYd9L3ZxUzYs4G7ZM00JeKUNaxX");


const stripe = new Stripe("sk_test_51IplL2C37SytJ6awuAIVFongzAgy6cL1RhXQFRDwKGWL5LFgjUI0SZdvucdKAgzmQyxvCcyLYd9L3ZxUzYs4G7ZM00JeKUNaxX");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/create-payment-intent", async (req, res) => {
    
    try{
        const {amount, name, email} = req.body;
        const customer = await stripe.customers.create({
            name, email
        })

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "cad"
          });
          res.status(200).send({
            clientSecret: paymentIntent.client_secret
          });
    }
    catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message })
    }

  });
  
  

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/bluesky', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(res=>{
    console.log("DB Connected!")
}).catch(err => {
console.log(Error, err.message);
});


// app.get('/api/wines', (req, res) => {
//     res.send(wineslist.wines)
// });

// app.get('/api/wines/:id', (req, res) => {
//     const wine = wineslist.wines.find( x => x.id === req.params.id );
//     if(wine){
//         res.send(wine);
//     }else{
//         res.status(404).send({message: `Product not Found`})
//     }
// })



app.use('/api/users', userRouter);

app.use('/api/wines', wineRouter);
app.use('/api/orders', orderRouter);



// app.get('/', (req, res) => {
//     res.send('Server is ready!');
// });

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, '/frontend/build')));

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
});

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
});


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});

