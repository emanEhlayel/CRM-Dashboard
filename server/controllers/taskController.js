import Task from "../models/Task.js";

export const addTask = async (req, res) => {
  try {
    const { userId, description, dueDate } = req.body;

    if (!userId || !description || !dueDate) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newTask = new Task({ userId, description, dueDate });
    await newTask.save();

    res.json({ message: "Task added successfully", task: newTask });
  } catch (error) {
    console.error(error.message);

  }
};

export const getUserTasks = async (req, res) => {
  try {
    const { userId } = req.params;

    const tasks = await Task.find({ userId }).sort({ dueDate: 1 });
    res.json(tasks);
  } catch (error) {
    console.error(error.message);
  }
};


export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, dueDate, completed } = req.body;

    const task = await Task.findByIdAndUpdate(
      id,
      { description, dueDate, completed },
      { new: true }
    );

    if (!task) return res.json({ message: "Task not found" });

    res.json({ message: "Task updated", task });
  } catch (error) {
    console.error(error.message);

  }
};


