const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    name: {type: String, required: true},
    quantity: {type: Number, required: true, default: 1},
    isPurchased: {type: Boolean, default: false},
})

module.exports = mongoose.model('Item', itemSchema);
