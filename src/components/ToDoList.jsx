import ToDoItem from "./ToDoItem";
import styles from "./toDoList.module.css";

export default function ToDoList({ toDos, setToDos }) {
  const sortedToDos = toDos.slice().sort((a,b) => Number(a.done) - Number(b.done));
  return (
    <div className={`${styles.todoList} container`}>
      {sortedToDos.map((item) => (
        <ToDoItem
          key={item.name}
          item={item}
          toDos={toDos}
          setToDos={setToDos}
        />
      ))}
    </div>
  );
}
