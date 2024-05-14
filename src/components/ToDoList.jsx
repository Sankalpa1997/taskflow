import ToDoItem from "./ToDoItem";

export default function ToDoList({ toDos }) {
  return (
    <div className="container">
      {toDos.map((item) => (
        <ToDoItem key={item} item={item} />
      ))}
    </div>
  );
}
