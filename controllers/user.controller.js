const { uuid } = require("uuidv4");

const User = require("../models/user.model");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOneUser = async (req, res) => {
  try {
    const oneUser = await User.findOne({ id: req.params.id });
    res.status(200).send(oneUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = new User({
      id: uuid(),
      name: req.body.name,
      age: Number(req.body.age),
    });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    user.name = req.body.name;
    user.age = Number(req.body.age);
    await user.save();
    res.status(200).send(user);

  } catch (error) {
    res.status(500).send(error.message)
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ id: req.params.id });
    res.status(200).send("Deleted Successfull");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getOneUser,
  deleteUser,
  updateUser,
};
