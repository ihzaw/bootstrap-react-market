const { Seller } = require('../models')
const generatePayload = require('../helpers/generatePayload')
const uuid4 = require('uuid4')

const addSeller = async (req, res, next) => {
    try {
        const { seller_name, address } = req.body
        if (!seller_name) throw { name: 'BAD_REQUEST', message: 'Name is required' }

        const seller_code = uuid4()
        const data = await Seller.create({ ...req.body, seller_code})
        if (!data) throw err

        const payload = generatePayload(data, 'Success')
        res.status(201).json(payload)
    } catch (err) {
        next(err)
    }
}

const editSeller = async (req, res, next) => {
    try {
        
    } catch (err) {
        next(err)
    }
}

const deleteSeller = async (req, res, next) => {
    try {
        
    } catch (err) {
        next(err)
    }
}

module.exports = { addSeller, editSeller, deleteSeller}