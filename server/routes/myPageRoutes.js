const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Product = require("../models/Product");
const AuthBoard = require("../models/AuthBoard");

const { auth } = require("../middleware/auth");

// 추후 다시 변경
router.use(auth);
router.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

router.get("/", async (req, res) => {
    try {
        const user = res.locals.user;
        const userData = await User.findOne({ _id: user._id });
        const userPosts = await AuthBoard.find({
            postedBy: userData._id,
        }).populate("postedBy");

        let waits = 0;
        let completes = 0;
        let wrongs = 0;
        for (let i = 0; i < userPosts.length; i++) {
            if (
                userPosts[i].compliteAuth === false &&
                userPosts[i].wrongAuth === false
            ) {
                waits += 1;
            } else if (userPosts[i].compliteAuth === true) {
                completes += 1;
            } else {
                wrongs += 1;
            }
        }

        const postsState = { waits, completes, wrongs };
        console.log(userPosts);
        return res.status(200).json({ userPosts, postsState });
    } catch (error) {
        console.error(error);
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
    try {
        const user = res.locals.user;
        console.log(user, "유저임 수량값같이 보내줬던데");
        //req 요청의 내가 이름지은 productId
        const ProductId = req.body.productId;
        //프로덕트 아이디
        console.log(ProductId);
        //삭제
        await User.updateOne(
            { _id: user._id },
            { $pull: { products: { productId: ProductId } } }
        );
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
