// require('dotenv').config()
// const express = require('express')
// const router = express.Router()
// const app = express()
// const mongoose = require('mongoose')
// const Product = require('./models/products.js')
// const PORT = process.env.PORT || 3000
// const methodOverride = require('method-override')

// app.use((req, res, next) => {
//     res.locals.data = {}
//     next()
// })
// app.use(express.urlencoded({extended:true}))
// app.use(methodOverride('_method'))
// app.use(express.static('public'))
// app.use('/products', require('./controllers/routeController.js'))

// app.set('view engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine())

// app.listen(PORT, ()=>{
//     console.log('listening on '+PORT)})

require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const PORT = process.env.PORT || 3000

// connecting to mongo db
const db = require('./models/db')
db.once('open', () => {
    console.log('server.js: connected to mongo')
})


// Using the JSX view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())


// Using express middleware
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(express.urlencoded({ extended: true }));        // this creates req.body
app.use(methodOverride('_method'));                     // allows us to override methods
app.use(express.static('public'));                      // allows us to use static files
app.use('/products', require('./controllers/routeController.js'));    // Mounts our RESTFUL/INDUCES ROUTES at /products


// Listen on PORT
app.listen(PORT, () => {
    console.log('Listening on port', PORT);
});