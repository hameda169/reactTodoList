import React from 'react';

export function ControlButtons(props) {
  const show = props.store.getState().currentShowState;

  return (
    <div>
      <button disabled={show === 'all'} onClick={() => props.store.dispatch({ type: 'setShowState', value: 'all' })}>
        All
      </button>
      <span> </span>
      <button disabled={show === 'done'} onClick={() => props.store.dispatch({ type: 'setShowState', value: 'done' })}>
        Done
      </button>
      <span> </span>
      <button disabled={show === 'undone'} onClick={() => props.store.dispatch({ type: 'setShowState', value: 'undone' })}>
        Undone
      </button>
    </div>
  );
}
