const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Product = require("../models/Product");
const AuthBoard = require("../models/AuthBoard");

const multer = require("multer");
const path = require("path");

const { auth } = require("../middleware/auth");

// 추후 다시 변경
router.use(auth);
router.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

const storageEngine = multer.diskStorage({
    destination: "client/public/img/profile",
    filename: function (req, file, callback) {
        callback(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});
const fileFilter = (req, file, callback) => {
    let pattern = /jpg|png|svg/; // reqex

    if (pattern.test(path.extname(file.originalname))) {
        callback(null, true);
    } else {
        callback("Error: not a valid file");
    }
};
const upload = multer({
    storage: storageEngine,
    fileFilter,
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

        return res.status(200).json({ userPosts, postsState, user });
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

        //req 요청의 내가 이름지은 productId
        const ProductId = req.body.productId;
        //프로덕트 아이디

        //삭제
        await User.updateOne(
            { _id: user._id },
            { $pull: { products: { productId: ProductId } } }
        );
    } catch (error) {
        console.log(error);
    }
});

router.put("/userImage", upload.single("profilePhoto"), async (req, res) => {
    try {
        const user = res.locals.user;
        const profileFile = `/img/profile/${req.file.filename}`;
        await User.updateOne(
            { _id: user._id },
            { $set: { profileImage: profileFile } }
        );

        return res.status(200).json({});
    } catch (error) {
        console.log(error);
    }
});

router.put("/payment", async (req, res) => {
    try {
        const user = res.locals.user;
        console.log(user);
    } catch (error) {}
});

module.exports = router;
