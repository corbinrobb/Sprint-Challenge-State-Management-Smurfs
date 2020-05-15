const initial = {
  editing: false,
  smurfs: [],
}


export const reducer = (state = initial, action) => {
  switch(action.type) {
    case 'FETCH_SMURFS':
      return {...state, smurfs: action.payload};
    case 'POST_SMURF':
      return { ...state, smurfs: action.payload };
    case 'DELETE_SMURF':
      return { ...state, smurfs: action.payload };
    case 'START_EDITING': 
      return {...state, editing: action.payload };
    case 'EDIT_SMURF':
      return {...state, smurfs: action.payload, editing: false}
    default:
      return state;
  }
}