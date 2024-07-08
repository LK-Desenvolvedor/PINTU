const mongoose = require("mongoose");

const LivrosSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  date: {
    type: Date,
    required: true
  }
});

const Livros = mongoose.model("Livros", LivrosSchema);

module.exports = Livros;
