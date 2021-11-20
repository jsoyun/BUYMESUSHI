const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const BoardSchema = mongoose.Schema({
    seq: { type: Number, default: 0 },
    title: { type: String, required: true },
    boardBody: { type: String, required: true },
    img: { type: String },
    postedBy: { type: ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
    viewcount: {
        type: Number,
        default: 0,
    },
});
BoardSchema
    // .plugin(
    //     autoIncrement.plugin,
    //     {
    //         model: 'boards',
    //         field: 'seq',
    //         startAt: 1, //시작
    //         increment: 1 // 증가
    //     })
    .pre('save', function (next) {
        const Board = this;
    });

const Board = mongoose.model('Board', BoardSchema);
module.exports = Board;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const mongoose = require('mongoose');
// const { ObjectId } = mongoose.Schema.Types;
// const User = require('./User');
// const autoIncrement = require('mongoose-auto-increment');
// autoIncrement.initialize(mongoose.connection);

// const BoardSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     boardBody: { type: String, required: true },
//     img: { type: String },
//     postedBy: { type: ObjectId, ref: 'User' },
//     createdAt: { type: Date, default: Date.now },
//     seq: { type: Number, default: 0 },

// }, { collection: 'BoardSchema', versionKey: false });

// BoardSchema.plugin(
//     autoIncrement.plugin,
//     {
//         model: 'BoardSchema',
//         field: 'seq',
//         startAt: 1, //시작
//         increment: 1 // 증가
//     });

// mongoose.model('BoardSchema', BoardSchema);
// const C = mongoose.connection.useDb("boards");
// module.exports = C.model("BoardSchema", BoardSchema);