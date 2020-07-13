import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { createTaskAction } from '../store/actions';

function PreTaskCreate(props) {
  const [newTask, setNewTask] = useState('');
  const setNewTaskName = useCallback((event) => setNewTask(event.target.value), []);
  const createTask = useCallback(
    (event) => {
      event.preventDefault();
      props.createTask(newTask);
      setNewTask('');
    },
    [props.createTask, newTask],
  );

  return (
    <form onSubmit={createTask}>
      <input type='text' onChange={setNewTaskName} value={newTask} />
      <button type='submit'>Add New Task</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  createTask: (name) => dispatch(createTaskAction(name)),
});

export const TaskCreate = connect(() => ({}), mapDispatchToProps)(PreTaskCreate);
