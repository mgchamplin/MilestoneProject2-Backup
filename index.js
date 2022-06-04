// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

console.log("Branch test")

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser:    true, 
    useUnifiedTopology: true,
  })

console.log("CONNECTING TO =" + process.env.MONGODB_URI)

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


// Controllers & Routes
app.use('/', require('./controllers/sites'))

app.get('*', (req, res) => {res.render('error404')})

console.log("Listening on Port " + process.env.PORT + " (set in your .env file)")
app.listen(process.env.PORT)              