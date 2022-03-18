const express = require('express')
const router = express.Router()
const Product = require('../models/products.js')

// Index
router.get('/', (req, res) => {
    // Use Products model to get all Products
    Product.find({}, (error, allProducts) => {
        res.render('Index', {
            products: allProducts
        })
    })

})

// New
router.get('/new', (req, res) => {
    res.render('New')
})

// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Product.findByIdAndRemove(req.params.id, (err, product) => {
        res.redirect('/products')
    })
})

// Update
router.put('/:id', (req, res) => {
    req.body.readyToEat = req.body.readyToEat === "on" ? true : false

    // Update the product document using our model
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/products')
    })
})

// Create
router.post('/', (req, res) => {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    // Use Model to create Product Document
    Product.create(req.body, (error, createdProduct) => {
        // Once created - respond to client
        res.redirect('/products')
    })
})

// Edit
router.get('/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    Product.findById(req.params.id, (err, foundProduct) => {
        // render the edit view and pass it the found product
        res.render('Edit', {
            product: foundProduct
        })
    })
})

// Show
router.get('/:id', (req, res) => {
    // Find the specific document
    Product.findById(req.params.id, (error, foundProduct) => {
        // render the Show route and pass it the foundProduct
        res.render('Show', {
            product: foundProduct
        })
    })
})


// export router
module.exports = router