const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/auth");

router.post("/", userController.createUser); //função para administrador criar usuários caso queira, não existe no user controller.js
router.get("/:id", userController.getProfile);
router.put("/:id", userController.updateProfile);
router.delete("/:id", userController.deleteProfile);

module.exports = router;
