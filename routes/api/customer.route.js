const express = require('express');
const router = express.Router();
const customerAuth = require('../../auth/customer.auth')

const customer = require('../../controllers/customer/customer.controller');
router.post('/create', customer.createCustomer);
router.post('/update',customerAuth, customer.updateCustomer);
router.post('/login', customer.customerLogin);

// Export the Router
module.exports = router;