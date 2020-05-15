import React from 'react';

const Smurf = ({name, age, height}) => {
  return (
    <div>
      <h3>{name}</h3>
      <h4>{age}</h4>
      <h4>{height}</h4>
    </div>
  );
}

export default Smurf;