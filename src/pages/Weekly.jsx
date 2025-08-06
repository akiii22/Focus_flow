import { useState } from "react";
import TaskModal from "../components/TaskModal";
import { useTaskContext } from "../context/context";
import styles from "./weekly.module.css";

const Weekly = () => {
  const { tasks, dispatch } = useTaskContext();
  const [modalType, setModalType] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const completedTask = tasks.filter((task) => task.completed);
  const pendingTask = tasks.filter((task) => !task.completed);

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
          <div className={styles.dayBox}>M</div>
          <div className={styles.dayBox}>T</div>
          <div className={styles.dayBox}>W</div>
          <div className={styles.dayBox}>T</div>
          <div className={styles.dayBox}>F</div>
          <div className={styles.dayBox}>S</div>
          <div className={styles.dayBox}>S</div>
        </div>

        <p className={styles.motivationText}>
          “Small steps every day lead to big results.” 💪
        </p>

        <div className={styles.progressWrapper}>
          <div className={styles.progressBar}>
            <div className={styles.progressFill}></div>
          </div>
          <p className={styles.progressLabel}>
            {completedTask.length} / {tasks.length} tasks completed
          </p>
        </div>
      </section>
    </>
  );
};
export default Weekly;
