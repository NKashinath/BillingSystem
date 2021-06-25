const productModel = require('../model/products.model');

class productService {
add(data){
    const product = new productModel(data)
    return product.save();
}
getAll(){
    return productModel.find();
}
}
module.exports = new productService();