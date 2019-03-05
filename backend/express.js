'use strict;'

require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors({
  origin: process.env.FRONTEND_HOST,
  optionsSuccessStatus: 200
}))

require('./src/route/main.route')(app)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Brewery listening on port ${PORT}!`))
