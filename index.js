'use strict;'

require('dotenv').config()

const express = require('express')
// const cors = require('cors')
const app = express()

// app.use(cors({
//   origin: process.env.FRONTEND_HOST || 'http://localhost:3000',
//   optionsSuccessStatus: 200
// }))

app.use(express.static('frontend/build'))
// require('./backend/src/route/main.route')(app)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Brewery listening on port ${PORT}!`))
