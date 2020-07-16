import axios from 'axios';

export const fetchSmurfs = () => async dispatch => {
  const response = await axios.get('http://localhost:3333/smurfs');

  dispatch({ type: 'FETCH_SMURFS', payload: response.data });
}

export const postSmurf = smurf => async dispatch => {
  const response = await axios.post('http://localhost:3333/smurfs', { ...smurf, age: Number(smurf.age) });

  dispatch({ type: 'POST_SMURF', payload: response.data });
}

export const deleteSmurf = id => async dispatch => {
  const response = await axios.delete(`http://localhost:3333/smurfs/${id}`);

  dispatch({ type: 'DELETE_SMURF', payload: response.data });
}

export const editSmurf = smurf => async dispatch => {
  const response = await axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf);
  
  dispatch({ type: 'EDIT_SMURF', payload: response.data });
}

export const startEditing = id => {
  return { type: 'START_EDITING', payload: id}
}