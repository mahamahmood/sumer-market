const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const productSchema = new Schema({
    name: {type: String, required: true},
    img: {type: String, required: true},
    description: {type: String, required: true},
    qty: {type: Number, minimum: 0, required: true},
    price: {type: Number, minimum: 0, required: true},
},{ timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
