import styles from "./toDoStats.module.css";
export default function ToDoStats({ totalToDos, completedToDos }) {
  return (
    <div className={`container ${styles.toDoStatsWrapper}`}>
      <h5>Total: {totalToDos}</h5>
      <h5>Completed: {completedToDos}</h5>
    </div>
  );
}
