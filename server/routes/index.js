const router = require('express').Router()
const productRouter = require('./productRouter')
const sellerRouter = require('./sellerRouter')

router.use('/products', productRouter)
router.use('/sellers', sellerRouter)

module.exports = router