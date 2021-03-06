const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const volleyball = require('volleyball')
const path = require('path')
const cors = require('cors')
const passport = require('passport')
const compression = require('compression')

const app = express()

app.use(compression())

app.use(cors())

// Logging Middleware
app.use(volleyball)

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// DB Config
const db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

// Use Routes
const admin = require('./routes/admin')
const contact = require('./routes/api/contact')
const checkout = require('./routes/api/checkout')
const product = require('./routes/api/product')
const stripe = require('./routes/api/order/stripe')
const paypal = require('./routes/api/order/paypal')

// Passport middleware
app.use(passport.initialize())

// Passport Config
require('./config/passport')(passport)

app.use('/admin', admin)
app.use('/api/contact', contact)
app.use('/api/checkout', checkout)
app.use('/api/products', product)
app.use('/api/order/stripe', stripe)
app.use('/api/order/paypal', paypal)

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.use((err, req, res, next) => {
  console.log('ERROR: ', err)
  res.status(400).json(err)
})

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}...`))

// mongoConnect(client => {
//   console.log(client)
//   app.listen(port)
// })
