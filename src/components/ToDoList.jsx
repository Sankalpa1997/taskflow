import ToDoItem from "./ToDoItem";
import styles from "./toDoList.module.css";

export default function ToDoList({ toDos }) {
  return (
    <div className="container bg-green-accent">
      {toDos.map((item) => (
        <ToDoItem key={item} item={item} />
      ))}
    </div>
  );
}
