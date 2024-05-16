import styles from "./toDoItem.module.css";
export default function ToDoItem({ item }) {
  return (
    <div className={styles.toDoItemWrapper}>
      <div className={styles.toDoItem}>{item}</div>
      <span><button>X</button></span>
    </div>
  );
}
