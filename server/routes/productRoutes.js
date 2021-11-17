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
  //밑에 이거 안됨.
  const addQty = {
    //   name: {
    //     type: String,
    //     required: true,
    //   },
    //   // description: {
    //   //   type: String,
    //   //   required: true,
    //   // },
    //   price: {
    //     type: Number,
    //     required: true,
    //   },
    //   countInStock: {
    //     type: Number,
    //     required: true,
    //   },
    //   imageUrl: {
    //     type: String,
    //     required: true,
    //   },
    //   qty: {
    //     type: Number,
    //   },
    //   // _id: req.body.userId,
    //   // products: req.user._id,
    //   // products,
    //   products: [{ ref: "Product" }],
    // };
    // User.insertMany(addQty);
  };
});
// router.post("/MyPage", (req, res) => {
//   console.log(req.data, "여기 서버단임 데이터 넘어오나?");
// });

module.exports = router;
