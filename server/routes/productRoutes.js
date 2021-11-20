const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { auth } = require("../middleware/auth");

router.use(auth);
router.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

const {
    getAllProducts,
    getProductById,
} = require("../controller/productControllers");
//@desc GET all products from db
//@route GET /api/products
//@access Public
router.get("/", getAllProducts);

//@desc GET a product by id from db
//@route GET /api/products/:id
//@access Public
router.get("/:id", getProductById);

router.post("/:id", (req, res) => {});

module.exports = router;
