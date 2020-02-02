/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { useCallback, useReducer, useEffect } from 'react';
import './App.css';
import { reducer, init } from './Reducer';
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
const TodoItem = ({ id, name, remove, done, check }) => (
  <div css={css`margin:10px;`} onClick={check}>
    <input
      checked={done}
      type="checkbox"
      css={{ backgroundColor: '#ff0000' }}
    />
    <span>{id}</span> - <span>{name}</span>
    {' - '}
    <span>{done ? 'done' : 'undone'}</span>
    <button
      onClick={remove}
      css={{
        fontFamily: 'MyFont',
        borderWidth: 0,
        backgroundColor: 'transparent',
        fontSize: 16,
        color: '#5c85c7',
        transition: 'all 0.5s',
        '&:hover': {
          color: '#e22b0a',
          transform: 'scale(1.5)'
        }
      }}
    >
      {'\ue807'}
    </button>
  </div>
);
const Select = styled.button({
  padding: '2px 10px',
  margin: '5px',
  fontSize: 16,
  borderRadius: '10px'
}, props => ({ backgroundColor: props.disabled ? '#33aa22' : '', color: props.disabled ? '#fff' : '' }));

function App() {
  const [state, dispatch] = useReducer(reducer, init, () => init);
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
    <div
      className="App"
      css={{
        background: 'linear-gradient(#e6646533, #9198e588)',
        height: '100%'
      }}
    >
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
          .filter(x =>
            state.show === 'all' ? true : state.show === 'done' ? x.done : !x.done
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
      </div>
      <input
        type="text"
        onChange={setNewTaskName}
        value={state.newTask}
        css={css`
          border-width: 0;
          padding: 5px;
          font-size: 15px;
        `}
      />
      <button
        onClick={addNewTask}
        css={{
          fontFamily: 'MyFont',
          borderWidth: 0,
          backgroundColor: 'transparent',
          fontSize: 16,
          color: '#5c85c7',
          transition: 'all 0.5s',
          '&:hover': {
            color: '#2db503',
            transform: 'scale(2)'
          }
        }}
      >
        {'\uf0fe'}
      </button>
    </div>
  );
}

export default App;
