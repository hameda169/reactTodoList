import React from "react";
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
  return (
    <div className="App">
      {my_todo_list.map(x => (
        <TodoItem id={x.id} name={x.name} />
      ))}
    </div>
  );
}

export default App;
