'use strict;'

const express = require('express')
const app = express()

require('./src/route/main.route')(app)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Brewery listening on port ${PORT}!`))
