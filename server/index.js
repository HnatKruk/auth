const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./router/index')
const errorsMiddleware = require('./middlewares/error-middleware')
require('dotenv').config()

const PORT = process.env.PORT || 6000

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  credentials: true,
  origin: process.env.ClIENT_URL
}))
app.use('/api', router)
app.use(errorsMiddleware)

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()