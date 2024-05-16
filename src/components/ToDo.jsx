import { useState } from "react";
import Form from "./Form";
import ToDoList from "./ToDoList";
import ToDoStats from "./ToDoStats";

export default function ToDo() {
  const [toDos, setToDos] = useState([]);
  const totalToDos = toDos.length;
  const completedToDos = toDos.filter((toDo) => toDo.done).length;
  return (
    <>
      <Form toDos={toDos} setToDos={setToDos} />
      <ToDoList toDos={toDos} setToDos={setToDos} />
      <ToDoStats totalToDos={totalToDos} completedToDos={completedToDos} />
    </>
  );
}
