const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
    try {
        //원래있음
        const user = res.locals.user;

        const products = await Product.find({});

        // const products = await Product.find({}).populate("user");

        res.json({ products, user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "server Error" });
    }
};
const getProductById = async (req, res) => {
    try {
        const products = await Product.findById(req.params.id);
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "server Error" });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
};
