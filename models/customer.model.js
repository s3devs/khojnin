  
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const CustomerSchema = new Schema({
    full_name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});

const Customer = mongoose.model('Customer', CustomerSchema);
module.exports = Customer;