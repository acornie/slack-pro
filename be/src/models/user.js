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
            type: Number,
            default: -1, // -1: offline 0: busy 1: online
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("users", userSchema);
