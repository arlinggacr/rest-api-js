const express = require('express')
const app = express()
const pool = require('./database/db')

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})