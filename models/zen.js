var mongoose = require('mongoose');

var zenSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: 'Quote cannot be blank!'
    },
    author: {
        type: String,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

var Zen = mongoose.model('Zen', zenSchema);

module.exports = Zen;