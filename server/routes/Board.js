const express = require("express");
const Board = require("../models/Board");
const User = require("../models/User");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { auth } = require("../middleware/auth");

const router = express.Router();

router.use(auth);
router.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

//게시글 전체 데이터 가져와서 불러오기
router.get("/", async (req, res, next) => {
    try {
        const posts = await Comment.findAll({
            include: {
                model: User,
                attributes: ["id", "nick"],
            },
            order: [["id", "DESC"]],
        });
        res.render("board", {
            title: "3e",
            comments: posts,
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

// 누른 그 해당글을 불러와야 함
router.get("/:id", async (req, res, next) => {
    try {
        const posts = await Comment.findOne({
            //해당 게시글을 id값(unique)을 통해 불러오는 방법
            include: {
                model: User,
                attributes: ["id", "nick"],
            },
            where: { id: req.params.id },
        });
        // //렌더링 되기 전 조회수 1 추가
        // const update = await Comment.update(
        //   {
        //   viewcount : ++posts.viewcount,
        // },
        // {where:{id : req.params.id}}
        // )
        res.render("boarddetail", {
            title: "게시글 상세페이지 | 3e",
            comments: posts,
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

try {
    fs.readdirSync("boarduploads");
} catch (error) {
    console.error("boarduploads 폴더가 없어 boarduploads 폴더를 생성합니다.");
    fs.mkdirSync("boarduploads");
}

//
router.get("/", async (req, res, next) => {
    try {
        const posts = await Comment.findAll({
            include: {
                model: User,
                attributes: ["id", "email"],
            },
            order: [["createdAt", "DESC"]],
        });
        res.render("boardwrite", {
            title: "3e",
            comments: posts,
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

// 이미지 업로드
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, cb) {
            cb(null, "boarduploads/");
        },
        filename(req, file, cb) {
            const ext = path.extname(file.originalname);
            cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
});

// 게시글값 업로드
router.post("/", async (req, res, next) => {
    try {
        const identity = res.locals.user;
        console.log(req.user);
        const comment = await Comment.create({
            title: req.body.title,
            comment: req.body.comment,
            img: req.body.url,
            viewcount: req.body.viewcount,
            UserId: identity.id,
        });
        res.redirect("/board");
    } catch (err) {
        console.error(err);
        next(err);
    }
});

//img 저장
router.post("/img", upload.single("img"), (req, res) => {
    console.log(req.file);
    res.json({ url: `/img/${req.file.filename}` });
});

const upload2 = multer();
router.post("/", upload2.none(), async (req, res, next) => {
    try {
        const identity = res.locals.user;
        console.log(req.user);
        const post = await Comment.create({
            title: req.body.title,
            comment: req.body.comment,
            viewcount: req.body.viewcount,
            img: req.body.url,
            UserId: identity.id,
            createdAt: req.body.createdAt,
        });
        // const hashtags = req.body.comment.match(/#[^\s#]*/g);
        // if (hashtags) {
        //   const result = await Promise.all(
        //     hashtags.map(tag => {
        //       return Hashtag.findOrCreate({
        //         where: { title: tag.slice(1).toLowerCase() },
        //       });
        //     }),
        //   );
        //   await post.addHashtags(result.map(r => r[0]));
        // }
        res.redirect("/");
    } catch (error) {
        console.error(error);
        next(error);
    }
});

// 본인 게시글 수정
router
    .route("/:id/boardedit")
    .get(async (req, res, next) => {
        try {
            const comment = await Comment.findOne({
                include: {
                    model: User,
                    attributes: ["id", "nick"],
                },
                where: { id: req.params.id },
            });
            res.render("boardedit", { comment });
        } catch (err) {
            console.error(err);
            next(err);
        }
    })
    .post(async (req, res, next) => {
        try {
            const comment = await Comment.update(
                {
                    title: req.body.title,
                    comment: req.body.comment,
                    img: req.body.url,
                },
                {
                    where: { id: req.params.id },
                }
            );
            res.redirect("/boarddetail/" + req.params.id);
        } catch (err) {
            console.error(err);
            next(err);
        }
    });

// 본인 게시글 삭제
router.route("/:id/delete").get(async (req, res, next) => {
    try {
        await Comment.destroy({
            where: { id: req.params.id },
        });
        res.redirect("/board");
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;
