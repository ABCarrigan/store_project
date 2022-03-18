const Product = require('../models/products.js');

const dataController = {
  index(req, res, next){
    Product.find({}, (error, allProducts) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      }else {
        res.locals.data.products = allProducts
        next()
      }
    });
  },
  create(req, res, next){
    req.body.readyToEat = req.body.readyToEat === "on" ? true : false;
    // Use Model to create Product Document
    Product.create(req.body, (error, createdProduct) => {
        // Once created - respond to client
        if(err){
          res.status(404).send({
            msg: err.message
          })
        }else {
          res.locals.data.product = createdProduct
          next()
        }
    });
  },
  show(req, res, next){
    Product.findById(req.params.id, (err, foundProduct)=>{
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = foundProduct
        next()
      }
    })
  },
  update(req, res, next){
    req.body.readyToEat = req.body.readyToEat === "on" ? true : false;
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedProduct) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = updatedProduct
        next()
      }
    });
  },
  destroy(req, res, next){
    Product.findByIdAndRemove(req.params.id, (err, product) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = product
        next()
      }
    });
  },
  buy(req, res, next){
    Product.findByIdAndUpdate(req.params.id, {$inc: {qty: -1}}, {new:true}, (err, incrementedProduct) => {
        if(err) {
            res.status(404).send({msg: err.message})
        }
        else {
            res.locals.data.product = incrementedProduct
            next()
        }
    })
}
}

module.exports = dataController