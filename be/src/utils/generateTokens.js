const jwt = require('jsonwebtoken')
require('dotenv').config()

const generateTokens = (user) => {
    const Token = jwt.sign(
        {
            id: user._id,
            email: user.email,
            username: user.username,
        },
        process.env.SECRET,
        { expiresIn: "1d" }
    );

    return Token;
};

module.exports = generateTokens;