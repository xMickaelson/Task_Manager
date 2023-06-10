const express = require("express");
const Task = require("../model/tasks");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const newTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({
    task,
  });
});

const getTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOne({ _id: id });
  if (!task) {
    return res.status(404).json({
      message: `No task with the id: ${id}`,
    });
  }
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res.status(404).json({
      message: `No task with the id: ${id}`,
    });
  }
  req.status(200).json({
    task,
  });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOneAndDelete({ _id: id });
  if (!task) {
    return res.status(404).json({
      message: `No task with ${id} exits`,
    });
  }
  res.status(200).json({
    message: `Task with ID ${id} has been successfully deleted`,
  });
});

module.exports = { getAllTasks, newTask, getTask, updateTask, deleteTask };
