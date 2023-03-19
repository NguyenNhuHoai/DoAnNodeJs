const loaiTinController = require("../controllers/loaiTinController");

const router = require("express").Router();

router.post("/", loaiTinController.addLoaiTin);

router.get("/", loaiTinController.getAllLoaiTin);

router.get("/:id", loaiTinController.getLoaiTin);

router.put("/:id", loaiTinController.updateLoaiTin);

router.delete("/:id", loaiTinController.deleteLoaiTin);

module.exports = router;