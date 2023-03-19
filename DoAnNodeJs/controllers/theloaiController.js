const TheLoai = require("../model/theLoai");
const LoaiTin = require("../model/loaiTin");

const TheLoaiController = {
    addTheLoai: async (req, res) => {
        try {
            const newTheLoai = new TheLoai(req.body);
            const saveTheLoai = await newTheLoai.save();
            res.status(200).json(newTheLoai);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllTheLoai: async (req, res) => {
        try {
            const theloais = await TheLoai.find();
            res.status(200).json(theloais);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getTheLoai: async (req, res) => {
        try {
            const theloai = await TheLoai.findById(req.params.id);
            res.status(200).json(theloai);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateTheLoai: async (req, res) => {
        try {
            const theloai = await TheLoai.findById(req.params.id);
            await theloai.updateOne({ $set: req.body });
            res.status(200).json("Update thanh cong");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteTheLoai: async (req, res) => {
        try {
            await LoaiTin.updateMany({
                theLoai: req.params.id,
            },
                {
                    $pull: {
                        theLoai: req.params.id
                    }
                });
            await TheLoai.findByIdAndDelete(req.params.id);
            res.status(200).json("delete thanh cong");
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = TheLoaiController;