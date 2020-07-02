import React, { useState, useCallback } from 'react';
import { TodoList } from './components/TodoList';
import { ControlButtons } from './components/ControlButtons';
import { TaskCreate } from './components/TaskCreate';

const my_todo_list = [
  { id: 1, name: 'Get Milk', done: false },
  { id: 2, name: 'Go to Gym', done: false },
  { id: 3, name: 'Call Mom', done: false },
  { id: 4, name: 'Work', done: false },
  { id: 5, name: 'Send Email', done: false },
];

function App() {
  const [tasks, setTasks] = useState(my_todo_list);
  const [lastId, setLastId] = useState(6);
  const [show, setShow] = useState('all');
  const remove = useCallback((id) => () => setTasks(tasks.filter((x) => x.id !== id)), [tasks]);
  const check = useCallback((id) => () => setTasks(tasks.map((x) => ({ ...x, done: x.id === id ? !x.done : x.done }))), [
    tasks,
  ]);
  const changeView = useCallback((newView) => () => setShow(newView), []);
  const addNewTask = useCallback(
    (name) => {
      setTasks([...tasks, { id: lastId, name, done: false }]);
      setLastId(lastId + 1);
    },
    [tasks, lastId],
  );
  return (
    <div>
      <ControlButtons show={show} changeView={changeView} />
      <TodoList
        activeTasks={tasks.filter((x) => ({ all: true, done: x.done, undone: !x.done }[show]))}
        show={show}
        remove={remove}
        check={check}
      />
      <TaskCreate addNewTask={addNewTask} />
    </div>
  );
}

export default App;
