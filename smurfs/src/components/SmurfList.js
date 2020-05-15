import React, { useContext } from 'react';
import Smurf from './Smurf';
import { SmurfContext } from '../contexts/SmurfContext';

const SmurfList = () => {
  const { smurfs } = useContext(SmurfContext);

  return (
    <>
    Smurf List
      {smurfs.map(smurf => {
        return <Smurf key={smurf.id} {...smurf} />
      })}
    </>
  );
}

export default SmurfList;