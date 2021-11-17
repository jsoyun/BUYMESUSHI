const express = require("express");
const AuthBoard = require("../models/AuthBoard");
const User = require("../models/User");

const { auth } = require("../middleware/auth");
const router = express.Router();
// 추후 다시 변경
router.use(auth);
router.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

router.get("/:id", async (req, res) => {
    try {
        const mypage = await AuthBoard.find({});
        return res.status(200).json({});
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;
