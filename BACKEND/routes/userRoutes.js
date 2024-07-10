const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/auth");

router.post("/", authMiddleware, userController.createUser); //função para administrador criar usuários caso queira, não existe no user controller.js
router.get("/:id", authMiddleware, userController.getProfile);
router.put("/:id", authMiddleware, userController.updateProfile);
router.delete("/:id", authMiddleware, userController.deleteProfile);

module.exports = router;
