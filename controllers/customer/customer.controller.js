const Customer = require('../../models/customer.model');
 const bcrypt = require('bcryptjs');
 const jwt = require('jsonwebtoken');

//  New Customer
exports.createCustomer = (req, res, next) => {
  const hash = bcrypt.hashSync(req.body.password, 8)
  const newCustomer = new Customer({
    full_name: req.body.full_name,
    mobile: req.body.mobile,
    email: req.body.email,
    password: hash
  })

  newCustomer.save().then( result => {
    if(!result){
      return res.status(201).json({
          error: true,
          msg: "Phone Number / Email Already Exists"
      });
    }

  const token = jwt.sign({_id:result._id}, process.env.secret, {expiresIn: "8h"})

  return res.status(201).json({
    data: result,
    token: token,
    msg: "Successfully Created User",
    error:false
  })

  }).catch(err => {
    return res.status(200).json({
      error: true,
      msg: "Phone Number / Email Already Exists",
      err: err
    });
  })
}
// Login
exports.loginCustomer = (req, res, next) => {

}
// Info Update
exports.updateCustomer = (req, res, next) => {

}

// Delete