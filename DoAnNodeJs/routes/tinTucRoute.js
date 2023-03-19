const tinTucController = require("../controllers/tintucConntroller");
const { route } = require("./authRoute");

const router = require("express").Router();

router.post("/", tinTucController.addTinTuc);

router.get("/", tinTucController.getAllTinTuc);

router.get("/:id", tinTucController.getTinTuc);

router.put("/:id", tinTucController.updateTinTuc);

router.delete("/:id", tinTucController.deleteTinTuc);

module.exports = router