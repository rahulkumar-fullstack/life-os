// Imports the central application state
import { appState } from "./appState.js";

// Adds a new task to the state
export function addTask(task) {
  appState.tasks.push(task);
}

// Toggles completion status of a task
export function toggleTask(taskId) {
  const task = appState.tasks.find(t => t.id === taskId);
  if (task) {
    task.completed = !task.completed;
  }
}

// Removes a task from the state
export function removeTask(taskId) {
  appState.tasks = appState.tasks.filter(t => t.id !== taskId);
}
