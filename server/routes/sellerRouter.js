const router = require('express').Router()
const { addSeller, editSeller, deleteSeller} = require('../controllers/sellerController')

router.post('/', addSeller)
router.put('/:seller_code', editSeller)
router.delete('/:seller_code', deleteSeller)

module.exports = router