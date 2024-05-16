import styles from "./toDoItem.module.css";
export default function ToDoItem({ item, toDos, setToDos }) {
  function toDoDelete(item) {
    console.log("Deleting item", item);
    setToDos(toDos.filter((toDo) => toDo !== item));
  }

  function handleClick(name) {
    console.log("Item click", name);
    setToDos(
      toDos.map((toDo) =>
        toDo.name === name ? { ...toDo, done: !toDo.done } : toDo
      )
    );
  }
  const classCompleted = item.done ? styles.completed : "";
  return (
    <div className={styles.toDoItemWrapper}>
      <div className={styles.toDoItem}>
        <span onClick={() => handleClick(item.name)} className={classCompleted}>
          {item.name}
        </span>
      </div>
      <span>
        <button onClick={() => toDoDelete(item)}>X</button>
      </span>
    </div>
  );
}
