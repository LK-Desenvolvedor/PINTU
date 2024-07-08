const express = require("express");
const router = express.Router();
const LivrosController = require("../controllers/LivrosController");
const authMiddleware = require("../middleware/auth");

router.post("/", authMiddleware, LivrosController.createLivros);
router.get("/", authMiddleware, LivrosController.getLivross);
router.put("/:id", authMiddleware, LivrosController.updateLivros);
router.delete("/:id", authMiddleware, LivrosController.deleteLivros);

module.exports = router;
