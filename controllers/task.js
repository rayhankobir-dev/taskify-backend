const Task = require("../models/task");

// geting tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.getAllTask();
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

// create a task
const createTask = async (req, res) => {
  const { title, description, status } = req.body;

  try {
    const task = await Task.add(title, description, status, req.user);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a task
const updateTask = async (req, res) => {
  const { id, title, description, status } = req.body;

  try {
    const task = await Task.update(id, title, description, status);
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a task
const deleteTask = async (req, res) => {
  console.log(req.body);
  const { id } = req.body;
  try {
    const task = await Task.delete({ _id: id });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
