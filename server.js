require('dotenv').config()

// Dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// Constants
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));
const mongoURI = process.env.MONGO_URI;
// Mongoose Connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('Connected to mongo!')
});

// Controllers

// Routes
app.get('/products', (req, res) => {
    res.send('Hello World')
})

// PORT Listen
app.listen(PORT, () => {
    console.log("I'm listening on port: " + PORT)
});