import { useState } from "react";
import Time from "../components/Time";
import styles from "./daily.module.css";
import ItemList from "../components/ItemList";
import { useTaskContext } from "../context/context";
import { useLocalStorageTask } from "../hooks/useLocalStorage";

// const dummyTasks = [
//   { id: 1, title: "Read 10 pages", completed: false },
//   { id: 2, title: "Journal reflection", completed: false },
//   { id: 3, title: "30-min walk", completed: false },
// ];

const Daily = () => {
  const [task, setTask] = useState("");
  const { tasks, dispatch } = useTaskContext();
  useLocalStorageTask(tasks);

  const itemTask = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    const newItems = {
      id: Date.now(),
      title: task,
      completed: false,
      date: new Date().toISOString().split("T")[0],
    };
    dispatch({ type: "ADD_TASK", payload: newItems });
    setTask("");
  };

  const toggleComplete = (id) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  };
  return (
    <main className={styles.dailyMain}>
      <h1>Daily</h1>
      <section className={styles.dailyContainer}>
        <div className={styles.dailyPending}>
          <h2>Pending</h2>
          <div className={styles.listContainer}>
            <ul>
              {tasks.map((task) => {
                const { id, title, completed, date } = task;
                return (
                  <ItemList
                    key={id}
                    title={title}
                    completed={completed}
                    date={date}
                    toggleComplete={() => toggleComplete(id)}
                  />
                );
              })}
            </ul>
          </div>
        </div>
        <div className={styles.formContainer}>
          <h2>Task</h2>
          <form action="" className={styles.form} onSubmit={itemTask}>
            <input
              type="text"
              placeholder="Enter your task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button className={styles.btn}>Submit</button>
          </form>
        </div>
        <div className={styles.timeContainer}>
          <Time />
        </div>
      </section>
    </main>
  );
};
export default Daily;
