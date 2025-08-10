import { useState } from "react";
import TaskModal from "../components/TaskModal";
import { useTaskContext } from "../context/context";
import styles from "./weekly.module.css";
import Motivation from "../components/Motivation";
import ProgressBar from "../components/ProgressBar";

const Weekly = () => {
  const { tasks, dispatch } = useTaskContext();
  const [modalType, setModalType] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const completedTask = tasks.filter((task) => task.completed);
  const pendingTask = tasks.filter((task) => !task.completed);
  console.log(tasks);

  const days = ["S", "M", "T", "W", "TH", "F", "ST"];
  const todayDate = new Date().getDay();
  console.log(todayDate);

  const handleOpenModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalType(null);
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };
  const getTaskList = () => {
    if (modalType === "all") return tasks;
    if (modalType === "pending") return pendingTask;
    if (modalType === "completed") return completedTask;
    return [];
  };
  console.log(modalType);
  return (
    <>
      <section className={styles.taskContainer}>
        <h1>Weekly Overview</h1>
        <div className={styles.taskOverview}>
          {showModal && (
            <TaskModal
              type={modalType}
              tasks={getTaskList()}
              onClose={handleCloseModal}
              onDelete={handleDelete}
            />
          )}
          <div
            className={styles.totalTask}
            onClick={() => handleOpenModal("all")}
          >
            <p>{tasks.length}</p>
            <h3>Weekly Task</h3>
          </div>
          <div
            className={styles.pendingTask}
            onClick={() => handleOpenModal("pending")}
          >
            <p>{pendingTask.length}</p>
            <h3>Pending Task</h3>
          </div>
          <div
            className={styles.completedTask}
            onClick={() => handleOpenModal("completed")}
          >
            <p>{completedTask.length}</p>
            <h3>Completed Task</h3>
          </div>
        </div>
      </section>
      <section className={styles.weeklyInsight}>
        <h2>Stay Consistent</h2>

        <div className={styles.dayGrid}>
          {days.map((day, index) => {
            return (
              <div
                key={index}
                className={`${styles.dayBox} ${
                  index === todayDate ? styles.currentDay : ""
                }`}
              >
                {day}
              </div>
            );
          })}
        </div>
        <Motivation />
        <ProgressBar
          completedTask={completedTask.length}
          total={tasks.length}
        />
      </section>
    </>
  );
};
export default Weekly;
