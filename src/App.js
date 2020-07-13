import React from 'react';
import { TodoList } from './components/TodoList';
import { ControlButtons } from './components/ControlButtons';
import { TaskCreate } from './components/TaskCreate';

function App({ store }) {
  return (
    <div>
      <ControlButtons store={store} />
      <TodoList store={store} />
      <TaskCreate store={store} />
    </div>
  );
}

export default App;
