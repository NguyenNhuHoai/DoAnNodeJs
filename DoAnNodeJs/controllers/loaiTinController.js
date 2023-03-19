const TheLoai = require("../model/theLoai");
const LoaiTin = require("../model/loaiTin");
const TinTuc = require("../model/tinTuc");

const loaiTinController = {
    addLoaiTin: async (req, res) => {
        try {
            const newLoaiTin = new LoaiTin(req.body);
            const saveLoaiTin = await newLoaiTin.save();
            if (req.body.theloai) {
                const theloai = TheLoai.findById(req.body.theloai);
                await theloai.updateOne({
                    $push: {
                        loaitin: saveLoaiTin._id
                    }
                })
            }
            res.status(200).json(newLoaiTin);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllLoaiTin: async (req, res) => {
        try {
            const allLoaiTin = await LoaiTin.find();
            res.status(200).json(allLoaiTin);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getLoaiTin: async (req, res) => {
        try {
            const loaiTin = await LoaiTin.findById(req.params.id).populate("theLoai");
            res.status(200).json(loaiTin)
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateLoaiTin: async (req, res) => {
        try {
            const loaiTin = await LoaiTin.findById(req.params.id);
            await loaiTin.updateOne({ $set: req.body });
            res.status(200).json("update thanh cong");
        } catch (error) {
            res.status(500).json(error)
        }
    }
    ,
    deleteLoaiTin: async (req, res) => {
        try {
            await TheLoai.updateMany(
                {
                    loaiTin: req.params.id,
                },
                {
                    loaiTin: null,
                }
            )
            await LoaiTin.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete successsfully");
        } catch (error) {
            res.status(500).json(error);
        }
    }


}

module.exports = loaiTinController;