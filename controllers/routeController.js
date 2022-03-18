const express = require('express')
const router = express.Router()
const Product = require('../models/products.js')
const dataController = require('./dataController.js')
const viewController = require('./viewController.js')

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
router.post('/', dataController.create, viewController.redirectHome)
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
// Buy
router.patch('/:id', dataController.buy, viewController.redirectShow)

// export router
module.exports = router