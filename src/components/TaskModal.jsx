import styles from "./TaskModal.module.css";

const TaskModal = ({ type, tasks, onClose, onDelete }) => {
  const getTitle = () => {
    if (type === "all") return "All Tasks";
    if (type === "pending") return "Pending Tasks";
    if (type === "completed") return "Completed Tasks";
    return "";
  };
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h3 className={styles.title}>{getTitle()}</h3>
        <button onClick={onClose} className={styles.closeBtn}>
          ×
        </button>
        <ul className={styles.taskList}>
          {tasks.map((task) => (
            <li key={task.id} className={styles.taskItem}>
              <span>{task.title}</span>
              <button
                onClick={() => onDelete(task.id)}
                className={styles.deleteBtn}
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TaskModal;
