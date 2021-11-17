const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    trim: true,
    unique: 1,
    required: [true, "email required"],
    validate: {
      validator: function (v) {
        return new Promise(function (resolve, reject) {
          resolve(
            /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}/.test(
              v
            )
          );
        });
      },
      message: (props) => `${props.value} is not a valid email format!`,
    },
  },
  password: {
    type: String,
    required: [true, "password required"],
    minlength: 8,
  },
  name: {
    type: String,
    required: [true, "name required"],
    validate: {
      validator: function (v) {
        return new Promise(function (resolve, reject) {
          resolve(/^[가-힣]{2,7}$/i.test(v));
        });
      },
      message: (props) => `${props.value} is not a valid name format!`,
    },
    minlength: 2,
  },
  nickname: {
    type: String,
    required: [true, "nickname required"],
    unique: 1,
    validate: {
      validator: function (v) {
        return new Promise(function (resolve, reject) {
          resolve(/[a-zA-Z0-9]/.test(v));
        });
      },
      message: (props) => `${props.value} is not a valid name format!`,
    },
  },
  address: {
    type: String,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
  pic: {
    type: String,
  },
  followers: [{ type: ObjectId, ref: "User" }],
  following: [{ type: ObjectId, ref: "User" }],
  //추가함
  products: [{ type: ObjectId, ref: "Product" }],
});

userSchema.pre("save", function (next) {
  const user = this;

  if (user.isModified("password")) {
    // 비밀번호를 암호화 시킨다.
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
  //
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
  // plainPassword '1234567' ===? 암호화된 비밀번호 '$2b$12$LRKkyGIq63Yi5zqng4Lv/eAlXXoaOZv5THL86F8UL.f0PkDnSGlg.'
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    // 에러 시
    if (err) return cb(err);
    else return cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function (cb) {
  const user = this;
  // jsonwebtoken을 이용해서 token을 생성하기
  const token = jwt.sign(user._id.toHexString(), "secretToken");
  // user._id+secretToken -> token
  user.token = token;
  user.save(function (err, user) {
    // 에러 시
    if (err) return cb(err);
    cb(null, user);
  });
};

userSchema.statics.findByToken = function (token, cb) {
  const user = this;
  // 토큰을 decode 한다.
  jwt.verify(token, "secretToken", function (err, decoded) {
    // 유저 아이디를 이용해서 유저를 찾은 다음에
    // 클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인
    user.findOne({ _id: decoded, token: token }, function (err, user) {
      if (err) return cb(err);
      else return cb(null, user);
    });
  });
};

const User = mongoose.model("User", userSchema);

module.exports = User;
