const mongoose = require('mongoose')

const siteSchema = new mongoose.Schema({
  name:       { type: String, required: true },
  image:      { type: String, default: "./images/sample.jpg"},
  city:       { type: String, default: 'Anytown' },
  state:      { type: String, default: 'USA' },
  years:      { type: Number },
  total_stars:{ type: Number, default: 0},
  
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
})

module.exports = mongoose.model('Site', siteSchema)