import { useState } from "react";
import Form from "./Form";
import ToDoList from "./ToDoList";

export default function ToDo() {
  const [toDos, setToDos] = useState([]);
  return (
    <>
      <Form toDos={toDos} setToDos={setToDos} />
      <ToDoList toDos={toDos} setToDos={setToDos} />
    </>
  );
}
