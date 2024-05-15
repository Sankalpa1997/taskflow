import ToDoItem from "./ToDoItem";
import styles from "./toDoList.module.css";

export default function ToDoList({ toDos }) {
  return (
    <div className={`${styles.todoList} container`}>
      {toDos.map((item) => (
        <ToDoItem key={item} item={item} />
      ))}
    </div>
  );
}
