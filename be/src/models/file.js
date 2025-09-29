const mongoose = require("mongoose");

const fileSchema = mongoose.Schema(
    {
        filename: {
            type: String,
            require: true
        },
        originalname: {
            type: String,
            require: true
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("files", fileSchema);
