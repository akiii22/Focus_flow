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
          <p className={styles.progressLabel}>5 / 10 tasks completed</p>
        </div>
      </section>
    </>
  );
};
export default Weekly;
