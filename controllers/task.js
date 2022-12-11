const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
    if (!tasks) {
      return res.status(404).json({ error: 'No tasks found' })
    }
    res.json({ tasks })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

const getTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id })
    if (!task) {
      return res.status(404).json({ error: 'Task not found' })
    }
    res.json({ task })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.json({ task })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
    if (!task) {
      return res.status(404).json({ error: 'Task not found' })
    }
    res.json({ task })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id })
    if (!task) {
      return res.status(404).json({ error: 'Task not found' })
    }
    res.json({ task })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask }
