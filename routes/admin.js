const rootDir = require('../util/path');

const express = require('express');
const path = require('path');

const router = express.Router();


router.post('/add-product', (req, res, next) => {
    console.log('[DEV]: ', req.body); // to debug parse process
    res.redirect('/');
});

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

module.exports = router;