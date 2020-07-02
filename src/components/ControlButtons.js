import React from 'react';

export function ControlButtons(props) {
  return (
    <div>
      <button disabled={props.show === 'all'} onClick={props.changeView('all')}>
        All
      </button>
      <span> </span>
      <button disabled={props.show === 'done'} onClick={props.changeView('done')}>
        Done
      </button>
      <span> </span>
      <button disabled={props.show === 'undone'} onClick={props.changeView('undone')}>
        Undone
      </button>
    </div>
  );
}
