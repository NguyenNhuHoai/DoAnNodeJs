const mongoose = require("mongoose");

const tinTucSchema = new mongoose.Schema({
    tieude: {
        type: String,
        require: true,
    },
    tomtat: {
        type: String,
        require: true,
    },
    noidung: {
        type: String,
        require: true,
    },
    urlhinh: {
        type: String,
        require: true
    },
    urlradio: {
        type: String,
        require: true
    },
    ngay: {
        type: String,
        require: true,
    },
    solanxem: {
        type: Number,
        require: true,
    },
    tinnoibac: {
        type: Boolean,
        require: true,
    },
    anhientin: {
        type: Boolean,
        require: true,
    },
    loaitin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "LoaiTin",
    },
    comment: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
}, {
    timestamps: true
})

module.exports = mongoose.model("TinTuc", tinTucSchema)