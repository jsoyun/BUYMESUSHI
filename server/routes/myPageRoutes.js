const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Product = require("../models/Product");

router.get("/", (req, res) => {
  // const mypageData= Product.insertMany(
  //     {
  //         include:{
  //             model:User,
  //             attributes: ["products"],

  //         }
  //     }
  // )
  try {
    res.render("mypage");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
