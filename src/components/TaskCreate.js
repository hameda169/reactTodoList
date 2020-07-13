import React, { useCallback, useState } from 'react';

export function TaskCreate(props) {
  const [newTask, setNewTask] = useState('');
  const setNewTaskName = useCallback((event) => setNewTask(event.target.value), []);
  const createTask = useCallback(
    (event) => {
      event.preventDefault();
      props.store.dispatch({ type: 'createTask', name: newTask });
      setNewTask('');
    },
    [props.addNewTask, newTask],
  );

  return (
    <form onSubmit={createTask}>
      <input type='text' onChange={setNewTaskName} value={newTask} />
      <button type='submit'>Add New Task</button>
    </form>
  );
}
