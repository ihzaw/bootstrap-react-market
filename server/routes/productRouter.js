const router = require('express').Router()
const { addProduct, deleteProduct } = require('../controllers/productController')

router.post('/:seller_code', addProduct)
router.delete('/:id', deleteProduct)

module.exports = router