const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    in_stock: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Item', ItemSchema);
