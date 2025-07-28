import Time from "../components/Time";
import styles from "./daily.module.css";

const dummyTasks = [
  { id: 1, title: "Read 10 pages", completed: false },
  { id: 2, title: "Journal reflection", completed: false },
  { id: 3, title: "30-min walk", completed: false },
];

const now = new Date().toLocaleTimeString();

const Daily = () => {
  return (
    <>
      <h1>Daily</h1>
      <section className={styles.dailyContainer}>
        <div className={styles.dailyPending}>
          <h2>Pending</h2>
          <div className={styles.listContainer}>
            <ul>
              {dummyTasks.map((task) => {
                const { id, title, completed } = task;
                return <li key={id}>{title}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className={styles.formContainer}>
          <h2>Task</h2>
          <form action="" className={styles.form}>
            <input type="text" placeholder="Enter your task" />
            <button className={styles.btn}>Submit</button>
          </form>
        </div>
        <div className={styles.timeContainer}>
          <Time />
        </div>
      </section>
    </>
  );
};
export default Daily;
