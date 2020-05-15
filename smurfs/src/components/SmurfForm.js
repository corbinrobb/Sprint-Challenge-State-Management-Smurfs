import React, { useState, useContext } from 'react';
import axios from 'axios';
import { SmurfContext } from '../contexts/SmurfContext';

const initial = {
  name: '',
  age: '',
  height: '',
};

const SmurfForm = () => {
  const [newSmurf, setNewSmurf] = useState(initial);
  const { setSmurfs } = useContext(SmurfContext);

  const handleChange = e => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('http://localhost:3333/smurfs', {...newSmurf, age: Number(newSmurf.age)})
      .then(res => setSmurfs(res.data))
      .catch(err => console.log(err))
    setNewSmurf(initial);
  }

  return (
    <form onSubmit={handleSubmit}>
      Add a Smurf!
      <input
        name="name"
        value={newSmurf.name}
        onChange={handleChange}
      />
      <input
        name="age"
        value={newSmurf.age}
        onChange={handleChange}
      />
      <input
        name="height"
        value={newSmurf.height}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}

export default SmurfForm;