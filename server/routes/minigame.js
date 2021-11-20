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

router.put("/", async (req, res) => {
    try {
        const user = res.locals.user;
        console.log("put 일어났어요");

        await User.updateOne(
            { _id: user._id },
            { $set: { points: user.points + 250 } }
        )
            .then(console.log(user, "게임 포인트 지급 완료"))
            .catch((err) => console.error.apply(err));
    } catch (error) {}
});

module.exports = router;
