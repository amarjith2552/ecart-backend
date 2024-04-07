const express = require('express')

const productController = require('../Controllers/productController')
const userController = require('../Controllers/userController')
const wishlistController = require('../Controllers/wishlistController')
const jwtMiddleware = require('../Middleware/jwtMiddleware')

const router = new express.Router()

//get all products
router.get('/all-products',productController.getAllProducts)

//register
router.post('/user/register',userController.register)

//login
router.post('/user/login',userController.login)

//get a product
router.get('/viewproduct/:id',productController.getproduct)

//wishlist
router.post('/wishlist',jwtMiddleware,wishlistController.addWishlist)

//getproduct
router.get('/getwishlist',jwtMiddleware,wishlistController.getwishlist)

module.exports = router