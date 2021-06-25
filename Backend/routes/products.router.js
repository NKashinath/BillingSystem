const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/products.ctrl');


router.post('/add', productCtrl.addProduct);
router.get('/getAll', productCtrl.getAll);

module.exports = router;