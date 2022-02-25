const router = require('express').Router()
const { addProduct, deleteProduct } = require('../controllers/productController')

router.post('/:seller_uuid', addProduct)
router.delete('/:id', deleteProduct)

module.exports = router