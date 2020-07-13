import React from 'react';

function TodoItem({ id, name, remove, done, check }) {
  return (
    <div>
      <input readOnly checked={done} type={'checkbox'} onClick={check} />
      <span>{id}</span> - <span>{name}</span> - <span>{done ? 'done' : 'undone'}</span>
      <button onClick={remove}>delete</button>
    </div>
  );
}

export function TodoList(props) {
  const show = props.store.getState().currentShowState;
  const activeTasks = props.store.getState().tasks.filter((x) => ({ all: true, done: x.done, undone: !x.done }[show]));

  return (
    <div>
      {activeTasks.length > 0 ? (
        activeTasks.map((x) => (
          <TodoItem
            key={x.id}
            id={x.id}
            name={x.name}
            remove={() => props.store.dispatch({ type: 'remove', id: x.id })}
            check={() => props.store.dispatch({ type: 'check', id: x.id })}
            done={x.done}
          />
        ))
      ) : (
        <div> List is Empty</div>
      )}
    </div>
  );
}
