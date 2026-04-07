// Imports the central application state
import { appState } from "./state/appState.js";

// Runs after the HTML is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Confirms app startup
  console.log("Life OS initialized");

  // Logs current state for debugging
  console.log("Current App State:", appState);
});
