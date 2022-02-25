const { Seller, Product } = require("../models");
const generatePayload = require("../helpers/generatePayload");
const createTimestampId = require('../helpers/createTimestampId')

const addProduct = async (req, res, next) => {
  try {
    const { name, price, stock } = req.body;
    const { seller_code } = req.params;
    const id = createTimestampId()

    if (!name) throw { name: "BAD_REQUEST", message: "Name is required" };
    if (!price) throw { name: "BAD_REQUEST", message: "Price is required" };
    if (!seller_code)
      throw { name: "BAD_REQUEST", message: "Seller uuid is required" };

    const response = await Product.create({id, ...req.body, seller_code });

    const payload = generatePayload(response, "Success");
    res.status(201).json(payload);
  } catch (err) {
    next(err);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const selectedProduct = await Product.findByPk(id);
    if (!selectedProduct)
      throw { name: "BAD_REQUEST", message: "Selected product is not found" };

    const response = await Product.destroy({ where: { id } });
    if (!response) throw err;

    res.status(200).json({ message: "OK" });
  } catch (err) {
    next(err);
  }
};

module.exports = { addProduct, deleteProduct };
