const Livros = require('../models/Livros');

exports.createLivros = async (req, res) => {
  try {
    const { title, description, date, location, organizer } = req.body;
    const newLivros = new Livros({
      title,
      description,
      date,
      location,
      organizer
    });
    const Livros = await newLivros.save();
    res.status(201).json(Livros);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getLivross = async (req, res) => {
  try {
    const Livross = await Livros.find();
    res.json(Livross);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateLivros = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedLivros = await Livros.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedLivros);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteLivros = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLivros = await Livros.findByIdAndDelete(id);
    res.json(deletedLivros);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
