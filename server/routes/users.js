const express = require("express");
const User = require("../models/User");
const { auth } = require("../middleware/auth");

const router = express.Router();

function getErrors(error) {
    let errorArray = [];
    if (error) {
        if (error.errors["email"]) {
            errorArray.push(error.errors["email"].message);
        }
        if (error.errors["password"]) {
            errorArray.push(error.errors["password"].message);
        }
        if (error.errors["name"]) {
            errorArray.push(error.errors["name"].message);
        }
        if (error.errors["nickname"]) {
            errorArray.push(error.errors["nickname"].message);
        }
        if (error.errors["address"]) {
            errorArray.push(error.errors["address"].message);
        }
    } else {
        console.log("No Errors Product Saved Succefully");
    }
    return errorArray;
}

router.post("/register", (req, res) => {
    // 회원 가입 할 때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다.

    // 여기랑
    const user = new User(req.body);

    user.save(async (err, userInfo) => {
        if (err) {
            let errors = getErrors(err);
            //Send Errors to browser
            console.log(errors);

            return res.json({ success: false });
        }

        return res.status(200).json({ success: true });
    });
    // user.save((err, userInfo) => {
    //     if (err) return res.json({ success: false });
    //     return res.status(200).json({ success: true });
    // });
});

router.post("/login", (req, res) => {
    // 요청된 이메일을 데이터 베이스에서 있는지 찾는다.
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
            return res.json({
                loginSuccess: false,
                message: "제공된 이메일에 해당하는 유저가 없습니다.",
            });
        }

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({
                    loginSuccess: false,
                    message: "비밀번호가 틀렸습니다",
                });

            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                // 토큰을 저장한다. 어디에 ? 일단 쿠키에
                res.cookie("x_auth", user.token)
                    .status(200)
                    .json({ loginSuccess: true, userId: user._id });
            });
        });
    });
    // 요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호인지 확인
    // 비밀번호까지 맞다면 토큰을 생성하기.
});

router.get("/auth", auth, (req, res) => {
    //여기까지 미들웨어를 통과해 왔다는 얘기는 Authentication이 True라는 말.
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        nickname: req.user.nickname,
        role: req.user.role,
        image: req.user.image,
        token: req.user.token,
        profileImage: req.user.profileImage,
        points: req.user.points,
    });
});

router.get("/logout", auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
        if (err) return res.json({ success: false, err });
        else
            return res.status(200).send({
                success: true,
            });
    });
});

module.exports = router;
