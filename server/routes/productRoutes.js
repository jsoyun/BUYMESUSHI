const express = require("express");
const router = express.Router();
const User = require("../models/User");

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

router.post("/:id", (req, res) => {
  console.log(
    req.body,
    "여기 서버단임 데이터 넘어오나? 서버는 터미널에만 보이는구나"
  );
});

module.exports = router;
