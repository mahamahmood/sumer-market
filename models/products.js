const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const productSchema = new Schema({
    name: {type: String, required: true},
    img: {type: String, required: true},
    description: {type: String, required: true},
    qty: {type: Number, required: true},
    price: {type: Number, required: true}
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;


// price and qty can't be less than zero
// I found the below but wasn't sure that it would work. need to come back to this.

// price: {
    //     type: Number, 
    //     min: [0]},
// qty: {
    //     type: Number,
    //     min: [0]
    // }
//can't be less than zero