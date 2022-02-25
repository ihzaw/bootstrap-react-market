const router = require('express').Router()
const { addSeller, editSeller, deleteSeller, getSeller} = require('../controllers/sellerController')

router.get('/', getSeller)
router.post('/', addSeller)
router.put('/:seller_code', editSeller)
router.delete('/:seller_code', deleteSeller)

module.exports = router