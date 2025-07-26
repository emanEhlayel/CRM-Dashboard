import express from "express";
import { addTask, getUserTasks, updateTask } from "../controllers/taskController.js";

const taskRouter = express.Router();

taskRouter.post("/add-Task", addTask);
taskRouter.get("/getAllUserTasks/:userId", getUserTasks);
taskRouter.put("/update-Task/:id", updateTask);


export default taskRouter;

