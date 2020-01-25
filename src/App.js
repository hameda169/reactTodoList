import React, { useState, useEffect } from "react";
import "./App.css";

const my_todo_list = [
  { id: 1, name: "Get Milk" },
  { id: 2, name: "Go to Gym" },
  { id: 3, name: "Call Mom" },
  { id: 4, name: "Work" },
  { id: 5, name: "Send Email" }
];
const TodoItem = ({ id, name }) => (
  <div style={{ width: null }}>
    <span>{id}</span> - <span>{name}</span>
  </div>
);

function App() {
  const [tasks, setTasks] = useState(my_todo_list);
  const [newTask, setNewTask] = useState("");
  const [lastId, setLastId] = useState(6);
  return (
    <div className="App">
      {tasks.map(x => (
        <TodoItem id={x.id} name={x.name} />
      ))}
      <input
        type={"text"}
        onChange={e => setNewTask(e.target.value)}
        value={newTask}
      />
      <button
        onClick={() => {
          setTasks([...tasks, { id: lastId, name: newTask }]);
          setLastId(lastId + 1);
        }}
      >
        Add New Task
      </button>
    </div>
  );
}

export default App;
