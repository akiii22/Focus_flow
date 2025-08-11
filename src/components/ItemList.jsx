import styles from "./ItemList.module.css";

const ItemList = ({ title, date, completed, toggleComplete }) => {
  return (
    <li
      className={`${styles.item} ${completed ? styles.completed : ""}`}
      onClick={toggleComplete}
    >
      <div>
        <p className={styles.title}>{title}</p>
        <span className={styles.date}>📅 {date}</span>
      </div>
    </li>
  );
};

export default ItemList;
