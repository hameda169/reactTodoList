import React from 'react';
import { TodoList } from './components/TodoList';
import { ControlButtons } from './components/ControlButtons';
import { TaskCreate } from './components/TaskCreate';

function App() {
  return (
    <div>
      <ControlButtons />
      <TodoList />
      <TaskCreate />
    </div>
  );
}

export default App;
