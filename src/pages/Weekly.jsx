import styles from "./weekly.module.css";

const Weekly = () => {
  return (
    <>
      <section className={styles.taskContainer}>
        <h1>Weekly Overview</h1>
        <div className={styles.taskOverview}>
          <div className={styles.totalTask}>
            <p>3</p>
            <h3>Weekly Task</h3>
          </div>
          <div className={styles.pendingTask}>
            <p>2</p>
            <h3>Pending Task</h3>
          </div>
          <div className={styles.completedTask}>
            <p>5</p>
            <h3>Completed Task</h3>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.progressSection}>
          <h2>Progress</h2>
          <div className={styles.progressWrapper}>
            <div className={styles.progressBar}>
              <div className={styles.progressFill}></div>
            </div>
            <p className={styles.progressLabel}>5 / 10 tasks completed</p>
            <p className={styles.motivation}>
              You're doing great! Keep it up 💪
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Weekly;
