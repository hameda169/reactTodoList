import React from 'react';
import { connect } from 'react-redux';

function PreControlButtons(props) {
  const show = props.currentShowState;

  return (
    <div>
      <button disabled={show === 'all'} onClick={() => props.setShowState('all')}>
        All
      </button>
      <span> </span>
      <button disabled={show === 'done'} onClick={() => props.setShowState('done')}>
        Done
      </button>
      <span> </span>
      <button disabled={show === 'undone'} onClick={() => props.setShowState('undone')}>
        Undone
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentShowState: state.currentShowState,
});

const mapDispatchToProps = (dispatch) => ({
  setShowState: (value) => dispatch({ type: 'setShowState', value }),
});

export const ControlButtons = connect(mapStateToProps, mapDispatchToProps)(PreControlButtons);
