import { useState } from "react";
import ToDoItem from "./ToDoItem";

export default function ToDo() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setToDos([...toDos, toDo]);
    setToDo("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          onChange={(e) => setToDo(e.target.value)}
          value={toDo}
        />
        <button type="submit">Add</button>
      </form>
      {console.log(toDos)}
      {toDos.map((item) => (
        <ToDoItem key={item} item={item} />
      ))}
    </div>
  );
}
