import { useEffect } from "react";

const STORAGE_KEY = "daily_tasks";

export const useLocalStorageTask = (tasks) => {
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);
};

export const loadInitialTasks = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};
