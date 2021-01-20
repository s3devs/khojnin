// Includes
require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

// Initialize
const app = express()
const PORT = process.env.PORT

// Configure
app.use(express.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

