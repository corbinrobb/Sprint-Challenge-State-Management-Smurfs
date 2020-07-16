import React, { useState, useEffect } from 'react';
import { postSmurf, editSmurf } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

const initial = {
  name: '',
  age: '',
  height: '',
};

const SmurfForm = () => {
  const editing = useSelector(state => state.editing);
  const smurfs = useSelector(state => state.smurfs);
  const [smurf, setSmurf] = useState(initial);
  const dispatch = useDispatch();

  

  useEffect(() => {
    if (editing) setSmurf(editing);
  }, [smurfs, editing]);

  const handleChange = e => {
    setSmurf({
      ...smurf,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (editing) {
      dispatch(editSmurf(smurf))
    } else {
      dispatch(postSmurf(smurf))
    }
    setSmurf(initial);
  }

  return (
    <form onSubmit={handleSubmit}>
      Add a Smurf!
      <input
        name="name"
        value={smurf.name}
        onChange={handleChange}
      />
      <input
        name="age"
        value={smurf.age}
        onChange={handleChange}
      />
      <input
        name="height"
        value={smurf.height}
        onChange={handleChange}
      />
      <button>{(editing) ? 'Edit' : 'Submit'}</button>
    </form>
  );
}

export default SmurfForm;