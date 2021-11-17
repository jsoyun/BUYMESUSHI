const express = require('express');
const AuthBoard = require('../models/AuthBoard');
const User = require('../models/User');

const multer = require('multer');
const path = require('path');

const { auth } = require('../middleware/auth');
const { findOneAndDelete } = require('../models/AuthBoard');
const router = express.Router();
// 추후 다시 변경
router.use(auth);
router.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

const storageEngine = multer.diskStorage({
    destination: 'client/public/img/authBoard',
    filename: function (req, file, callback) {
        callback(
            null,
            file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        );
    },
});
const fileFilter = (req, file, callback) => {
    let pattern = /jpg|png|svg/; // reqex

    if (pattern.test(path.extname(file.originalname))) {
        callback(null, true);
    } else {
        callback('Error: not a valid file');
    }
};
const upload = multer({
    storage: storageEngine,
    fileFilter,
});

router.get('/', async (req, res) => {
    try {
        //console.log(req.cookies);
        const user = res.locals.user;

        // console.log(user);
        const authBoards = await AuthBoard.find({})
            .populate('postedBy')
            .populate('likes');
        // console.log(authBoards);
        // console.log("find : ", authBoards);
        for (let i = 0; i < authBoards.length; i++) {
            if (authBoards[i].likes.length < 5) {
                console.log('likes가 5보다 작아요!');
            }
            if (authBoards[i].dislikes.length < 5) {
                console.log('dislikes가 5보다 작아요!');
            }
        }
        // console.log(authBoards);

        res.json({ authBoards });
    } catch (error) {
        console.log(error);
    }
});

router.post('/post', upload.single('authBoardPhoto'), async (req, res) => {
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
            photo: `img/authBoard/${req.file.filename}`,
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

router.post('/like', (req, res) => {
    res.send('hi123');
});
router.put('/like', async (req, res) => {
    try {
        const user = res.locals.user;
        const findPost = await AuthBoard.findOne({
            _id: req.body.postId,
        }).populate('likes');
        console.log(findPost.likes.length, '개의 likes가 있음');

        if (findPost.likes.length == 0) {
            await AuthBoard.updateOne(
                { _id: findPost._id },
                { $push: { likes: user._id } }
            )
                .then(console.log('좋아요 등록 완료'))
                .catch((err) => console.error('등록 실패', err));
        } else {
            for (let i = 0; i < findPost.likes.length; i++) {
                if (findPost.likes[i].nickname === user.nickname) {
                    await AuthBoard.updateOne(
                        { _id: findPost._id },
                        { $pull: { likes: { $in: [user._id] } } }
                    )
                        .then(console.log('좋아요 취소 완료'))
                        .cathch((err) => console.error(err));
                }
            }
            await AuthBoard.updateOne(
                { _id: findPost._id },
                { $push: { likes: user._id } }
            )
                .then(console.log('좋아요 등록 완료'))
                .catch((err) => console.error('등록 실패', err));
        }

        const AuthBoardDB = await AuthBoard.find({});

        return res.status(200).json({ AuthBoardDB });
    } catch (error) {}

    res.status(200).json([{}]);
});

router.put('/dislike', async (req, res) => {
    try {
        const user = res.locals.user;
        const findPost = await AuthBoard.findOne({
            _id: req.body.postId,
        }).populate('dislikes');
        console.log(findPost.dislikes.length, '개의 dislikes가 있음');

        if (findPost.dislikes.length == 0) {
            await AuthBoard.updateOne(
                { _id: findPost._id },
                { $push: { dislikes: user._id } }
            )
                .then(console.log('싫어요 등록 완료'))
                .catch((err) => console.error('등록 실패', err));
        } else {
            for (let i = 0; i < findPost.dislikes.length; i++) {
                if (findPost.dislikes[i].nickname === user.nickname) {
                    await AuthBoard.updateOne(
                        { _id: findPost._id },
                        { $pull: { dislikes: { $in: [user._id] } } }
                    )
                        .then(console.log('싫어요 취소 완료'))
                        .cathch((err) => console.error(err));
                }
            }
            await AuthBoard.updateOne(
                { _id: findPost._id },
                { $push: { dislikes: user._id } }
            )
                .then(console.log('싫어요 등록 완료'))
                .catch((err) => console.error('등록 실패', err));
        }

        const AuthBoardDB = await AuthBoard.find({});

        return res.status(200).json({ AuthBoardDB });
    } catch (error) {}

    res.status(200).json([{}]);
});

router.get('/:id', (req, res) => {
    res.send('hi2');
});

module.exports = router;
