const express = require("express");
const router = express.Router();
const LivrosController = require("../controllers/LivrosController");
const authMiddleware = require("../middleware/auth");

router.post("/", LivrosController.createLivros);
router.get("/", LivrosController.getLivross);
router.put("/:id", LivrosController.updateLivros);
router.delete("/:id", LivrosController.deleteLivros);

module.exports = router;
