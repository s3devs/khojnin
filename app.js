// Includes
require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require("path")
const compression = require("compression")
const helmet = require("helmet")

// Initialize
const app = express()
const PORT = process.env.PORT

// Route Compression
app.use(compression())

// User Helmate
app.use(helmet())

// Database connect
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(res => console.log("MongoDB Connected")).catch(err => console.log(err))

// Configure Express
app.use(express.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
// Asset Upload folder
app.use('/uploads', express.static(path.join("uploads")))

// Header Allow CORS
app.use((req,res,next) => {
  res.header("Access-Control-Allow-Origin", "*"); //* will allow from all cross domain
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
})

app.use(cors())

// Routes
const api = require("./routes/api")
app.use("/api", api)

// Start Server
app.listen(PORT, () => console.log("Server is UP & Running on "+PORT))