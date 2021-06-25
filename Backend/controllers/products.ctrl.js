const productService = require('../services/products.service');

class productCtrl{
    async addProduct(req, res){
        try {
            const product = await productService.add(req.body);
            res.send({data: product, status: 200})
        } catch (error) {
            console.log(error);
            res.send({err: error})
        }
    }
    async getAll(req, res){
        try {
            const products = await productService.getAll();
            res.send({data: products, status: 200})
        } catch (error) {
            console.log(error);
            res.send({err: error})
        }
    }
}

module.exports = new productCtrl();