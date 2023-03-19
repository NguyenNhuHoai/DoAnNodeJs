const middlewareController = require("../controllers/middlewareController");
const userController = require("../controllers/userController");

const router = require("express").Router();

router.get("/getAllUser", userController.getAllUsers);

router.get("/getUser", middlewareController.verifyToken, userController.getUser);

router.delete("/deleteUser/:id", middlewareController.verifyTokenAnAdminAuth, userController.deleteUser);


module.exports = router;