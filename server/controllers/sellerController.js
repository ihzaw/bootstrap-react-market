const { Seller, Product } = require('../models')
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
        const { seller_code } = req.params
        if (!req.body) throw { name: 'BAD_REQUEST' }
        if (!seller_code) throw { name: "BAD_REQUEST", message: 'Seller uuid is required'}

        const [success, data] = await Seller.update(req.body, { where: { seller_code }, returning: true, raw: true })
        if (!success) throw err

        const payload = generatePayload(data[0], 'Success')
        res.status(200).json(payload)
    } catch (err) {
        next(err)
    }
}

const deleteSeller = async (req, res, next) => {
    try {
        const { seller_code } = req.params
        if (!seller_code) throw { name: "BAD_REQUEST", message: 'Seller uuid is required'}

        const response  = await Seller.destroy({ where: { seller_code }})
        if (!response) throw err

        res.status(200).json({ message: 'OK' })
    } catch (err) {
        next(err)
    }
}

const getSeller = async (req, res, next) => {
    try {
        // const { seller_code } = req.params
        // if (!seller_code) throw { name: "BAD_REQUEST", message: 'Seller uuid is required'}

        // const response  = await Seller.destroy({ where: { seller_code }})
        // if (!response) throw err

        // res.status(200).json({ message: 'OK' })
        const response = await Seller.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            include: {
                model: Product,
                as: 'products',
                key: 'seller_uuid'
            },

        })

        const payload = generatePayload(response, 'Success')

        res.status(200).json(payload)
    } catch (err) {
        next(err)
    }
}

module.exports = { addSeller, editSeller, deleteSeller, getSeller }