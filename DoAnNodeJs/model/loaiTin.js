const mongoose = require("mongoose");

const loaiTinSchema = new mongoose.Schema({
    tenloaitin: {
        type: String,
        require: true,
    },
    thutuloaitin: {
        type: String,
        require: true,
    },
    anhienloaitin: {
        type: Boolean,
        // require: true,
    },
    theloai: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TheLoai"
    },
    tintuc: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "TinTuc"
        }
    ]
}, {
    timestamps: true
})

module.exports = mongoose.model("LoaiTin", loaiTinSchema);