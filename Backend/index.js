const express = require('express');
const mongoose = require('mongoose');
const app = express();
const productsRouter = require('./routes/products.router');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

app.listen(5050, ()=>{
    console.log('Express is running on port 5050')
});
app.get('/', (req, res) => {
    res.send('Welcome Kashinath');
})
app.use('/products', productsRouter);

mongoose.connect('mongodb+srv://knagaram:ADPadp@123@kashinath.fj5aj.mongodb.net/BillingSystem?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true} ,(err, res)=>{
    if(res)
        console.log('Connected to BillingSystem DB on Mongoose');
     
    else
        console.log(err)
    })