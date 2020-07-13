import React from 'react';
import { connect } from 'react-redux';

function TodoItem({ id, name, remove, done, check }) {
  return (
    <div>
      <input readOnly checked={done} type={'checkbox'} onClick={check} />
      <span>{id}</span> - <span>{name}</span> - <span>{done ? 'done' : 'undone'}</span>
      <button onClick={remove}>delete</button>
    </div>
  );
}

function PreTodoList(props) {
  const show = props.currentShowState;
  const activeTasks = props.tasks.filter((x) => ({ all: true, done: x.done, undone: !x.done }[show]));

  return (
    <div>
      {activeTasks.length > 0 ? (
        activeTasks.map((x) => (
          <TodoItem
            key={x.id}
            id={x.id}
            name={x.name}
            remove={() => props.remove(x.id)}
            check={() => props.check(x.id)}
            done={x.done}
          />
        ))
      ) : (
        <div> List is Empty</div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentShowState: state.currentShowState,
  tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch({ type: 'remove', id }),
  check: (id) => dispatch({ type: 'check', id }),
});

export const TodoList = connect(mapStateToProps, mapDispatchToProps)(PreTodoList);
