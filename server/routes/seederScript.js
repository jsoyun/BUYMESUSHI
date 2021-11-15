const Product = require("../models/Product");
const User = require("../models/User");
const AuthBoard = require("../models/AuthBoard");
const { products } = require("../data/products");
const { users } = require("../data/users");
//const { authBoards } = require('../data/authBoards');

const importDate = async () => {
    try {
        // await Product.deleteMany();
        // await Product.collection.drop();
        // await Product.insertMany(products);
        // await User.deleteMany();
        // await User.insertMany(users);
        const a = await User.find({});
        const b = a[1]._id;
        const c = a[2]._id;
        // console.log(b);
        const authBoards = [
            {
                authBody: "최씨가 올림",
                photo: "img/authBoard/abc.jpg",
                likes: [b],
                comments: [
                    { text: "asdf", postedBy: b },
                    { text: "sdfsdf", postedBy: c },
                ],
                postedBy: b,
            },
        ];
        // await AuthBoard.deleteMany();
        // await AuthBoard.insertMany(authBoards);

        console.log("Data Import Success");
    } catch (error) {
        console.error(error);
    }
};

module.exports = importDate;
