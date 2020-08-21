// Dependencies
const express = require('express');
const app = express();


// Routes
app.get('/products', (req, res) => {
    res.send('Hello World')
})

// PORT Listen
app.listen(3000, () => {
    console.log("I'm listening")
})