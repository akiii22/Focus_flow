import { createContext, useContext, useReducer } from "react";
import { loadInitialTasks } from "../hooks/useLocalStorage";
const TaskItem = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];

    case "TOGGLE_TASK":
      return state.map((task) => {
        return task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task;
      });
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, loadInitialTasks());
  return (
    <TaskItem.Provider value={{ tasks: state, dispatch }}>
      {children}
    </TaskItem.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskItem);
  if (!context)
    throw new Error("useTaskContext must be used within TaskProvider");
  return context;
};
