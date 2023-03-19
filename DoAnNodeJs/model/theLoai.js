const mongoose = require("mongoose");

const theLoaiSchema = new mongoose.Schema({
    tentheloai: {
        type: String,
        require: true,
    },
    thututheloai: {
        type: [String],
        require: true,
    },
    anhientheloai: {
        type: Boolean,
    },
    loaitin: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "LoaiTin",
        }
    ],
}, {
    timestamps: true
})

module.exports = mongoose.model("TheLoai", theLoaiSchema);