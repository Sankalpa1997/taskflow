import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ toDos, setToDos }) {
  // const [toDo, setToDo] = useState("");
  const [toDo, setToDo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setToDos([...toDos, toDo]);
    setToDo({ name: "", done: false });
  }
  return (
    <div className="container bg-green-accent text-white">
      <form className={styles.todoForm} onSubmit={handleSubmit} action="">
        <input
          type="text"
          className={styles.todoInput}
          onChange={(e) => setToDo({ name: e.target.value, done: false })}
          value={toDo.name}
          placeholder="Add a new task here..."
        />
        <button type="submit" className={styles.todoButton}>
          Add
        </button>
      </form>
    </div>
  );
}
