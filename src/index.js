import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';

const my_todo_list = [
  { id: 1, name: 'Get Milk', done: false },
  { id: 2, name: 'Go to Gym', done: false },
  { id: 3, name: 'Call Mom', done: false },
  { id: 4, name: 'Work', done: false },
  { id: 5, name: 'Send Email', done: false },
];

const initialState = {
  tasks: my_todo_list,
  lastId: my_todo_list.length + 1,
  currentShowState: 'all',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setShowState':
      return {
        ...state,
        currentShowState: action.value,
      };
    case 'remove':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    case 'check':
      return {
        ...state,
        tasks: state.tasks.map((task) => (task.id === action.id ? { ...task, done: !task.done } : task)),
      };
    case 'createTask':
      return {
        ...state,
        tasks: [...state.tasks, { id: state.lastId, name: action.name, done: false }],
        lastId: state.lastId + 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
