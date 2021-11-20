const express = require('express');
const Board = require('../models/Board');
const User = require('../models/User');
const multer = require('multer');
//const path = require("path");
const fs = require('fs');
const { auth } = require('../middleware/auth');
const mongoose = require('mongoose');

const router = express.Router();

router.use(auth);
router.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

// 게시글 전체 데이터 가져와서 불러오기(Board)
router.get('/', async (req, res) => {
    try {
        const user = res.locals.user;
        const Boards = await Board.find({}).populate('createdAt')
            .populate('postedBy');
        console.log(Boards);
        res.json({ Boards });
    } catch (error) {
        console.log(error);
    }
});

// 누른 그 해당글 하나를 불러와야 함(BoardDetail)
router.get('/:id', async (req, res) => {
    try {
        const Boards = await Board.findOne({ _id: req.params.id }).populate('createdAt').populate('postedBy');
        // //렌더링 되기 전 조회수 1 추가
        // const update = await Board.update(
        //   {
        //   viewcount : ++posts.viewcount,
        // },
        console.log({ Boards });
        res.status(200).json({ Boards });
    } catch (error) {
        console.error(error);
        // next(error);
    }
});
try {
    fs.readdirSync('boarduploads');
} catch (error) {
    console.error('boarduploads 폴더가 없어 boarduploads 폴더를 생성합니다.');
    fs.mkdirSync('boarduploads');
}

// 게시글값 업로드
router.post('/write', async (req, res) => {
    try {
        const identity = res.locals.user;

        const title = req.body.Title;
        const body = req.body.Body;

        const insertMongo = {
            title: title,
            boardBody: body,
            postedBy: identity._id,
        };
        await Board.insertMany(insertMongo);

        const findBoard = await Board.find({});
        return res.status(200).json({ findBoard });
    } catch (err) {
        console.error(err);
        // next(err);
    }
});


module.exports = router;
