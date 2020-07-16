import React from 'react';
import Smurf from './Smurf';
import { useSelector } from 'react-redux';

const SmurfList = () => {
  const smurfs = useSelector(state => state.smurfs);

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