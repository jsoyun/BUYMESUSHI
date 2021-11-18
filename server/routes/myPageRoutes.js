const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Product = require("../models/Product");
const path = require("path");

const { auth } = require("../middleware/auth");

// 추후 다시 변경
router.use(auth);
router.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

router.get("/", (req, res) => {
  try {
    res.render("mypage");
  } catch (error) {
    console.error(error);
    next(error);
  }

  // const findProductUpdate = await User.findOne({ _id: user._id }).populate(
  //   "products.productId"
  // );
  // console.log(findProductUpdate.products, "find");
  // return res.status(200).json({ findProductUpdate });
});

router.put("/", async (req, res) => {
  try {
    //현재 유저
    const user = res.locals.user;

    await User.updateOne(
      //현재유저의 아이디
      { _id: user._id },
      //유저의 products에 넣기/ productId에는
      {
        $push: {
          products: [{ productId: req.body._id, qty: req.body.qty1 }],
        },
      }
    );
    // const findProductUpdate = await User.findOne({ _id: user._id }).populate(
    //   "products.productId"
    // );
    // console.log(findProductUpdate.products, "find");
    // return res.status(200).json({ findProductUpdate });
  } catch (error) {
    console.log(error);
  }

  //   //update
  //   populate
  //   productId:Id
  //   qty:qty1
  // $push

  // const user = res.locals.user;
  // console.log(user);

  // const userID = await User.populate("products");
  // console.log(userID, "유ㅠㅠㅠ");

  ////
  // const product = await new Product(req.body);

  // product.save((err) => {
  //   if (err) return res.status(400).json({ success: false, err });

  //   return res.status(200).json({ success: true });
  // });

  // await User.updateOne({ _id: userID._id }, { productID: req.body.product });

  // res.redirect("/");
  // res.render("/", mypageData);
  // console.log(mypageData, "????????????????????");
});

module.exports = router;
