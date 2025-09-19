const jwt = require('jsonwebtoken')

exports.loginByToken = (token) => {
    return jwt.decode(token, { secret: "secret" });
}