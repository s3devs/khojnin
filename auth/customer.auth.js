const jwt = require("jsonwebtoken")

const Customer = require("../models/customer.model")
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const decodedToken = jwt.verify(
      token,
      process.env.SECRET
    )
    Customer.findById(decodedToken._id).then(result => {
      if(result){
        req.customerData = {
          customerId: result._id
        }
        next()
      }else{
        return res.status(400).json({error: true,status: 201, msg: "You are not authenticated"});
      }
    })
  } catch (error) {
    return res.status(400).json({error: true,status: 201, msg: "Token Invalid, Check Again"});
  }
}