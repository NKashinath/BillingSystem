const mongoose = require('mongoose');

const productModel = mongoose.model('Products', {
    name: String,
    price: Number,
    lastUpdatedAt:{
        type: Date,
        default: Date.now()
    }
});

module.exports = productModel;