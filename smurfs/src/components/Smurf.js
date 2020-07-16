import React from 'react';
import { deleteSmurf, startEditing } from '../actions';
import { useDispatch } from 'react-redux';

const Smurf = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{props.name}</h3>
      <h4>{props.age}</h4>
      <h4>{props.height}</h4>
      <button onClick={() => dispatch(startEditing(props))}>Edit</button>
      <button onClick={() => dispatch(deleteSmurf(props.id))}>Delete</button>
    </div>
  );
}

export default Smurf;