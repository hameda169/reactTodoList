import React from 'react';
import { AddButton, Container, Item, NewTaskInput, RemoveButton, Select } from './App.styled';
import { useCallback, useReducer, useEffect } from 'react';
import { reducer, init } from './Reducer';
import Global from './globalStyles';
import {
  addTaskAct,
  changeNameAct,
  checkAct,
  initAct,
  removeAct,
  viewAct
} from './Actions';

const my_todo_list = [
  { id: 1, name: 'Get Milk', done: false },
  { id: 2, name: 'Go to Gym', done: false },
  { id: 3, name: 'Call Mom', done: false },
  { id: 4, name: 'Work', done: false },
  { id: 5, name: 'Send Email', done: false }
];
const TodoItem = ({ id, name, onRemove, done, onCheck }) => (
  <Item
    onClick={onCheck}
  >
    <input
      checked={done}
      type="checkbox"
    />
    <span>{id}</span> - <span>{name}</span>
    {' - '}
    <span>{done ? 'done' : 'undone'}</span>
    <RemoveButton onClick={onRemove}>&#xe807;</RemoveButton>
  </Item>
);

function App() {
  const [state, dispatch] = useReducer(reducer, init, () => init);
  useEffect(() => dispatch(initAct(my_todo_list, 6)), []); //componentDidMount
  const onRemove = useCallback(id => () => dispatch(removeAct(id)), []);
  const onCheck = useCallback(id => () => dispatch(checkAct(id)), []);
  const changeView = useCallback(show => () => dispatch(viewAct(show)), []);
  const addNewTask = useCallback(() => dispatch(addTaskAct()), []);
  const setNewTaskName = useCallback(
    e => dispatch(changeNameAct(e.target.value)),
    []
  );
  return (
    <Container>
      <Global/>
      <Select disabled={state.show === 'all'} onClick={changeView('all')}>
        All
      </Select>
      <Select disabled={state.show === 'done'} onClick={changeView('done')}>
        Done
      </Select>
      <Select disabled={state.show === 'undone'} onClick={changeView('undone')}>
        Undone
      </Select>
      <br/>
      <div>
        {state.tasks
          .filter(x => state.show === 'all' || (x.done && state.show === 'done') || (!x.done && state.show === 'undone'))
          .map(x => (
            <TodoItem
              id={x.id}
              name={x.name}
              onRemove={onRemove(x.id)}
              onCheck={onCheck(x.id)}
              done={x.done}
            />
          ))}
      </div>
      <NewTaskInput
        type="text"
        onChange={setNewTaskName}
        value={state.newTask}
      />
      <AddButton onClick={addNewTask}>&#xf0fe;</AddButton>
    </Container>
  );
}

export default App;
