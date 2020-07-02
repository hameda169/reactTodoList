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
  return (
    <div>
      {props.activeTasks.length > 0 ? (
        props.activeTasks.map((x) => (
          <TodoItem
            key={x.id}
            id={x.id}
            name={x.name}
            remove={props.remove(x.id)}
            check={props.check(x.id)}
            done={x.done}
          />
        ))
      ) : (
        <div> List is Empty</div>
      )}
    </div>
  );
}
