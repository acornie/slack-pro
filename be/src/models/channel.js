const mongoose = require("mongoose");

const channelSchema = mongoose.Schema(
    {
        creator: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: true,
        },
        name: {
            type: String,
            require: true
        },
        members: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "users",
        },
        types : {
            type : String,
            default:"group"
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("channels", channelSchema);
