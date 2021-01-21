const express = require('express')
let router = express.Router()

// Customer Routes------------------
let customer = require('./api/customer.route');
router.use('/customer', customer);

module.exports = router