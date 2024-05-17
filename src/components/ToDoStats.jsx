import styles from "./toDoStats.module.css";
export default function ToDoStats({ totalToDos, completedToDos }) {
  return (
    <div className={`container ${styles.toDoStatsWrapper}`}>
      <div className={styles.statWrapper}>
        <span>
          Total Tasks: <b>{totalToDos}</b>
        </span>
      </div>
      <div className={styles.statWrapper}>
        <span>
          Completed Tasks: <b>{completedToDos}</b>
        </span>
      </div>
    </div>
  );
}
