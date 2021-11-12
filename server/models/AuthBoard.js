const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const authBoardschema = new mongoose.Schema({
    authBody: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        //required: true,
    },
    likes: [{ type: ObjectId, ref: "User" }],
    comments: [
        {
            text: { type: String },
            postedBy: { type: ObjectId, ref: "User" },
        },
    ],
    postedBy: {
        type: ObjectId,
        ref: "User",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

authBoardschema.pre("save", function (next) {
    const authBoard = this;
});

const AuthBoard = mongoose.model("AuthBoard", authBoardschema);

module.exports = AuthBoard;
