const TheLoaiController = require("../controllers/theloaiController");

const router = require("express").Router();

router.post("/", TheLoaiController.addTheLoai);

router.get("/", TheLoaiController.getAllTheLoai);

router.get("/:id", TheLoaiController.getTheLoai);

router.put("/:id", TheLoaiController.updateTheLoai);

router.delete("/:id", TheLoaiController.deleteTheLoai);

module.exports = router;