const router = require('express').Router()
const { addSeller, editSeller, deleteSeller} = require('../controllers/sellerController')

router.post('/', addSeller)
router.put('/', editSeller)
router.delete('/', deleteSeller)

module.exports = router