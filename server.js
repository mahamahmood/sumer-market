require('dotenv').config();

// Dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// Constants
// Allow use of Heroku's port or my own local port, depding on the environment
const PORT = process.env.PORT || 3000;

// Middleware & Database
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));
// Connecting to database via heroku
const mongoURI = process.env.MONGO_URI;
// Mongoose Connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('Connected to mongo!');
});

// Controllers
const productsController = require('./controllers/products.js');
app.use('/products', productsController); // router for products

const recipesController = require('./controllers/recipes.js');
app.use('/recipes', recipesController);// router for recipes

// Default Route
// app.get('/', (req, res) => {
//     // res.send('Hello World');
//     res.redirect('/products');
// });

//==== Static Pages ====//
// Home Page
app.get('/', (req, res) => {
    res.render('static/Home');
});

// About Page
app.get('/about', (req, res) => {
    res.render('static/About');
});

// Contact Us Page
app.get('/contact-us', (req, res) => {
    res.render('static/ContactUs');
});
//==== End of Static Pages ====//


// PORT Listen
app.listen(PORT, () => {
    console.log("I'm listening on port: " + PORT);
});