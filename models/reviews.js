const mongoose = require('mongoose')

let reviewSchema = new mongoose.Schema({
    reviewer:  { type: String, default: 'Anonymous' },
    stars:     { type: Number, required: true },
    date:      { type: String, default: ''},
    review:    { type: String, default: '' }
})
  
module.exports = mongoose.model('Review', reviewSchema)