const TinTuc = require("../model/tinTuc");
const LoaiTin = require("../model/loaiTin");


const tinTucController = {
    addTinTuc: async (req, res) => {
        try {
            const newTinTuc = new TinTuc(req.body);
            const saveTinTuc = await newTinTuc.save();
            if (req.body.loaitin) {
                const loaitin = LoaiTin.findById(req.body.loaitin);
                await loaitin.updateOne({
                    $push: {
                        tintuc: saveTinTuc._id,
                    }
                });
            }
            res.status(200).json(newTinTuc);
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getAllTinTuc: async (req, res) => {
        try {
            const allTinTuc = await TinTuc.find();
            res.status(200).json(allTinTuc);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getTinTuc: async (req, res) => {
        try {
            const tintuc = await TinTuc.findById(req.params.id);
            res.status(200).json(tintuc);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateTinTuc: async (req, res) => {
        try {
            const tintuc = await TinTuc.findById(req.params.id);
            await tintuc.updateOne({ $set: req.body });
            res.status(200).json("update thành công");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteTinTuc: async (req, res) => {
        try {
            await LoaiTin.updateMany({ tinTuc: req.params.id },
                { tinTuc: null });
            await TinTuc.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
module.exports = tinTucController