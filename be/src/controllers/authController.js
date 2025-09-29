const User = require("../models/user");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const generateTokens = require('../utils/generateTokens');

//signUp
exports.signUp = (req, res) => {
    const { email, password, username } = req.body;
    
    console.log(req.file)
    const avatar = req.file.filename;
    
    if (!email || !password || !username) {
        return res.status(200).json({ mes: "Please fill all the fields", status: "warning" });
    }
    User.findOne({ email: email }).then((user) => {
        if (user) {
            return res.status(200).json({ mes: "Email already exists", status: "info" });
        }
        bcrypt.hash(password, 10, (err, hash) => {
            const user = new User({
                email,
                username,
                password: hash,
                avatar: avatar
            });
            user
                .save()
                .then(() =>
                    res.status(200).json({
                        mes: "Registered", status: "success"
                    })
                )
                .catch((err) => res.status(500).json({ mes: err.message, status: "error" }));
        });
    });
};

//signIn
exports.signIn = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email: email }).then((user) => {

        if (!user) {
            return res.status(400).json({ error: "user is not found", status: "error" });
        }
        bcrypt.compare(password, user.password, (err, result) => {

            if (!result) {
                return res.status(401).json({ error: "password incorrect", status: "warning" });
            }
            const Token = generateTokens(user);

            return res.json({
                token:  Token,
                message: "Signed",
                status: "success"
            });
        });
    });
};
exports.verify = async (req,res) => {
    try {
            const token=req.headers.authorization;
            const user =await jwt.verify(token,process.env.SECRET);
            
            res.json({
                type:'success',
                message:"checkuser success",
                data:user
            })
        } catch (error) {
            res.json({
                type:'error',
                message:"checkuser error",
                // data:user
            })
    }
}