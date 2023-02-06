const express = require('express');

const path = require('path');

const rootDir = require('../util/path');
const adminData = require('./admin');

const route = express.Router();

route.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = route;