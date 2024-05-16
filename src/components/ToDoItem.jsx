import styles from "./toDoItem.module.css";
export default function ToDoItem({ item, toDos, setToDos }) {
  function toDoDelete(item) {
    console.log("Deleting item",item);
    setToDos(toDos.filter((toDo) => toDo !== item));
    
  }
  return (
    <div className={styles.toDoItemWrapper}>
      <div className={styles.toDoItem}>{item}</div>
      <span>
        <button onClick={() => toDoDelete(item)}>X</button>
      </span>
    </div>
  );
}
