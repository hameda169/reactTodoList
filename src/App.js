import React, { useCallback, useReducer, useEffect } from "react";
import "./App.css";
import { reducer, init } from "./Reducer";
import {
  addTaskAct,
  changeNameAct,
  checkAct,
  initAct,
  removeAct,
  viewAct
} from "./Actions";

const my_todo_list = [
  { id: 1, name: "Get Milk", done: false },
  { id: 2, name: "Go to Gym", done: false },
  { id: 3, name: "Call Mom", done: false },
  { id: 4, name: "Work", done: false },
  { id: 5, name: "Send Email", done: false }
];
const TodoItem = ({ id, name, remove, done, check }) => (
  <div style={{ width: null }}>
    <input checked={done} type={"checkbox"} onClick={check} />
    <span>{id}</span> - <span>{name}</span>
    {" - " /*it's a &nbsp. prettier added this automatically*/}
    <span>{done ? "done" : "undone"}</span>
    <button onClick={remove}>delete</button>
  </div>
);

function App() {
  const [state, dispatch] = useReducer(reducer, init, undefined);
  useEffect(() => dispatch(initAct(my_todo_list, 6)), []); //componentDidMount
  const remove = useCallback(id => () => dispatch(removeAct(id)), []);
  const check = useCallback(id => () => dispatch(checkAct(id)), []);
  const changeView = useCallback(show => () => dispatch(viewAct(show)), []);
  const addNewTask = useCallback(() => dispatch(addTaskAct()), []);
  const setNewTaskName = useCallback(
    e => dispatch(changeNameAct(e.target.value)),
    []
  );
  return (
    <div className="App">
      <button disabled={state.show === "all"} onClick={changeView("all")}>
        All
      </button>
      <button disabled={state.show === "done"} onClick={changeView("done")}>
        Done
      </button>
      <button disabled={state.show === "undone"} onClick={changeView("undone")}>
        Undone
      </button>
      <br />
      {state.tasks
        .filter(x =>
          state.show === "all" ? true : state.show === "done" ? x.done : !x.done
        )
        .map(x => (
          <TodoItem
            id={x.id}
            name={x.name}
            remove={remove(x.id)}
            check={check(x.id)}
            done={x.done}
          />
        ))}
      <input type={"text"} onChange={setNewTaskName} value={state.newTask} />
      <button onClick={addNewTask}>Add New Task</button>
    </div>
  );
}

export default App;
