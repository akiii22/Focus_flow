import styles from "./ProgressBar.module.css";

const ProgressBar = ({ completedTask, total }) => {
  const percentage = total > 0 ? (completedTask / total) * 100 : 0;
  return (
    <div className={styles.progressWrapper}>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className={styles.progressLabel}>
        {completedTask} / {total} tasks completed
      </p>
    </div>
  );
};
export default ProgressBar;
