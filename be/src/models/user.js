const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default: "#090", // -1: offline 0: busy 1: online
        },
        avatar: {
            type: String,
            default: "default.gif"
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("users", userSchema);
