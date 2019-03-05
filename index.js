'use strict;'

require('dotenv').config()

const favicon = require('express-favicon')
const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

app.use(cors({
  origin: process.env.FRONTEND_HOST || 'http://localhost:4000',
  optionsSuccessStatus: 200
}))

app.use(favicon(path.join(__dirname, '/frontend/build/favicon.ico')))
app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'frontend/build')))

require('./backend/src/route/main.route')(app)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'))
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Brewery listening on port ${PORT}!`))
