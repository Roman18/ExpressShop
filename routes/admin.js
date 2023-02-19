const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.post('/add-product', adminController.postAddProduct);

router.get('/products', adminController.getProducts);

router.get('/add-product', adminController.getAddProduct);

module.exports = router;