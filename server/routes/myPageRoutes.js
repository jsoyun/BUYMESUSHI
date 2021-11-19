const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Product = require("../models/Product");

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
  } catch (error) {
    console.log(error);
  }
});
//지우기
router.post("/", async (req, res) => {
  // try {
  //   const user = res.locals.user;
  //   console.log(user, "삭제할려고 현재유저확인");
  //   await User.updateMany(
  //     { _id: user._id },
  //     {
  //       $pull: {
  //         products: { $in: [{ productId: req.body._id, qty: req.body.qty1 }] },
  //       },
  //     },
  //     { multi: true }
  //   );
  // } catch (error) {
  //   console.log(error);
  // }

  // try {
  //   const user = res.locals.user;
  //   console.log(user, "삭제할려고 현재유저확인");
  //   await User.updateMany({

  //     products: { productId: req.body._id, qty: req.body.qty1 },
  //   });
  //   // where:{products: req.body.products}
  //   // ();
  // } catch (error) {
  //   console.log(error);
  // }
  try {
    const user = res.locals.user;
    console.log(user, "삭제할려고 현재유저확인");
    await User.updateOne(
      { _id: products._id },
      { products: { productId: req.body._id, qty: req.body.qty1 } }
    );
    // where:{products: req.body.products}
    // ();
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
