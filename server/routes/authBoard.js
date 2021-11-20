const express = require("express");
const AuthBoard = require("../models/AuthBoard");
const User = require("../models/User");

const multer = require("multer");
const path = require("path");

const { auth } = require("../middleware/auth");
const router = express.Router();

router.use(auth);
router.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

const storageEngine = multer.diskStorage({
    destination: "client/public/img/authBoard",
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
        //console.log(req.cookies);
        const user = res.locals.user;

        // console.log(user);
        const authBoards = await AuthBoard.find({ compliteAuth: false })
            .find({ wrongAuth: false })
            .populate("postedBy")
            .populate("likes");

        for (let i = 0; i < authBoards.length; i++) {
            if (authBoards[i].likes.length >= 5) {
                await AuthBoard.updateOne(
                    { _id: authBoards[i]._id },
                    { compliteAuth: true }
                )
                    .then(
                        console.log("5보다 커서 compliteAuth true 변경 완료!")
                    )
                    .catch((err) => console.error.apply(err));
                await User.updateOne(
                    { _id: authBoards[i].postedBy._id },
                    { $set: { points: authBoards[i].postedBy.points + 500 } }
                )
                    .then(console.log("유저에게 500 포인트 지급 완료!"))
                    .catch((err) => console.error.apply(err));
            }
            if (authBoards[i].dislikes.length >= 5) {
                console.log("dislikes가 5보다 커요!");
                await AuthBoard.updateOne(
                    { _id: authBoards[i]._id },
                    { wrongAuth: true }
                )
                    .then(console.log("5보다 커서 wrongAuth true 변경 완료!"))
                    .catch((err) => console.error.apply(err));
            }
        }
        // console.log(authBoards);
        const resultAuthBoards = await AuthBoard.find({ compliteAuth: false })
            .find({ wrongAuth: false })
            .sort([["createdAt", -1]])
            .populate("postedBy")
            .populate("likes")
            .populate("comments.postedBy");

        //console.log(resultAuthBoards[0].comments[0].text);
        return res.json({ resultAuthBoards });
    } catch (error) {
        console.log(error);
    }
});

router.post("/post", upload.single("authBoardPhoto"), async (req, res) => {
    try {
        // 아래 : Object: null prototype 삭제
        // const obj = JSON.parse(JSON.stringify(req.body));
        // console.log(obj);

        const user = res.locals.user;
        const authBoardBody = req.body.authBody;
        //         console.log(user);
        // console.log(req.file, req.body);
        // console.log(authBoardBody);

        const insertMongo = {
            authBody: authBoardBody,
            photo: `/img/authBoard/${req.file.filename}`,
            postedBy: req.user._id,
        };

        await AuthBoard.insertMany(insertMongo);
        // .then(() => {
        //     return res.status(200).json({ postAuthBoard: true });
        // })
        // .catch((err) => {
        //     return res.json({ postAuthBoard: false });
        // });
        const findAuthBoard = await AuthBoard.find({});

        return res.status(200).json({ findAuthBoard });
    } catch (error) {
        console.log(error);
    }
});

router.put("/like", async (req, res) => {
    try {
        const user = res.locals.user;
        const findPost = await AuthBoard.findOne({
            _id: req.body.postId,
        }).populate("likes");
        console.log(findPost.likes.length, "개의 likes가 있음");

        if (findPost.likes.length == 0) {
            await AuthBoard.updateOne(
                { _id: findPost._id },
                { $push: { likes: user._id } }
            )
                .then(console.log("좋아요 등록 완료"))
                .catch((err) => console.error("등록 실패", err));
        } else {
            for (let i = 0; i < findPost.likes.length; i++) {
                if (findPost.likes[i].nickname === user.nickname) {
                    await AuthBoard.updateOne(
                        { _id: findPost._id },
                        { $pull: { likes: { $in: [user._id] } } }
                    )
                        .then(console.log("좋아요 취소 완료"))
                        .cathch((err) => console.error(err));
                }
            }
            await AuthBoard.updateOne(
                { _id: findPost._id },
                { $push: { likes: user._id } }
            )
                .then(console.log("좋아요 등록 완료"))
                .catch((err) => console.error("등록 실패", err));
        }

        const AuthBoardDB = await AuthBoard.find({});

        return res.status(200).json({ AuthBoardDB });
    } catch (error) {}

    res.status(200).json([{}]);
});

router.put("/dislike", async (req, res) => {
    try {
        const user = res.locals.user;
        const findPost = await AuthBoard.findOne({
            _id: req.body.postId,
        }).populate("dislikes");
        console.log(findPost.dislikes.length, "개의 dislikes가 있음");

        if (findPost.dislikes.length == 0) {
            await AuthBoard.updateOne(
                { _id: findPost._id },
                { $push: { dislikes: user._id } }
            )
                .then(console.log("싫어요 등록 완료"))
                .catch((err) => console.error("등록 실패", err));
        } else {
            for (let i = 0; i < findPost.dislikes.length; i++) {
                if (findPost.dislikes[i].nickname === user.nickname) {
                    await AuthBoard.updateOne(
                        { _id: findPost._id },
                        { $pull: { dislikes: { $in: [user._id] } } }
                    )
                        .then(console.log("싫어요 취소 완료"))
                        .cathch((err) => console.error(err));
                }
            }
            await AuthBoard.updateOne(
                { _id: findPost._id },
                { $push: { dislikes: user._id } }
            )
                .then(console.log("싫어요 등록 완료"))
                .catch((err) => console.error("등록 실패", err));
        }

        const AuthBoardDB = await AuthBoard.find({});

        return res.status(200).json({ AuthBoardDB });
    } catch (error) {}

    res.status(200).json([{}]);
});

router.post("/comments", async (req, res) => {
    try {
        const user = res.locals.user;
        await AuthBoard.updateOne(
            { _id: req.body.authBoardId },
            {
                $push: {
                    comments: { text: req.body.comments, postedBy: user._id },
                },
            }
        )
            .then(console.log("성공했나..?"))
            .catch((err) => console.error(err));

        return res.redirect("/authBoard");
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;
