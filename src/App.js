import React, { useState } from 'react';
import './App.css';

const my_todo_list = [
  { id: 1, name: 'Get Milk', done: false },
  { id: 2, name: 'Go to Gym', done: false },
  { id: 3, name: 'Call Mom', done: false },
  { id: 4, name: 'Work', done: false },
  { id: 5, name: 'Send Email', done: false }
];
const TodoItem = ({ id, name, remove, done, check }) => (
  <div style={{ width: null }}>
    <input checked={done} type={'checkbox'} onClick={() => check(id)} />
    <span>{id}</span> - <span>{name}</span> - <span>{done ? 'done' : 'undone'}</span>
    <button onClick={() => remove(id)}>delete</button>
  </div>
);

function App() {
  const [tasks, setTasks] = useState(my_todo_list);
  const [newTask, setNewTask] = useState('');
  const [lastId, setLastId] = useState(6);
  const [show, setShow] = useState('all');
  const remove = id => {
    setTasks(tasks.filter(x => x.id !== id));
  };
  const check = id => {
    setTasks(tasks.map(x => ({ ...x, done: x.id === id ? !x.done : x.done })));
  };
  return (
    <div className="App">
      <button disabled={show === 'all'} onClick={() => setShow('all')}>
        All
      </button>
      <button disabled={show === 'done'} onClick={() => setShow('done')}>
        Done
      </button>
      <button disabled={show === 'undone'} onClick={() => setShow('undone')}>
        Undone
      </button>
      <br />
      {tasks
        .filter(x => (show === 'all' ? true : show === 'done' ? x.done : !x.done))
        .map(x => (
          <TodoItem id={x.id} name={x.name} remove={remove} check={check} done={x.done} />
        ))}
      <input type={'text'} onChange={e => setNewTask(e.target.value)} value={newTask} />
      <button
        onClick={() => {
          setTasks([...tasks, { id: lastId, name: newTask, done: false }]);
          setLastId(lastId + 1);
          setNewTask('');
        }}
      >
        Add New Task
      </button>
    </div>
  );
}

export default App;
