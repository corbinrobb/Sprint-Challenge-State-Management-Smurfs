import React, { useEffect } from "react";
import "./App.css";
import SmurfList from './SmurfList';
import SmurfForm from "./SmurfForm";

import { useDispatch } from 'react-redux';
import { fetchSmurfs } from '../actions';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSmurfs());
  }, [dispatch])

  return (
    <div className="App">
      <SmurfForm />
      <SmurfList />
    </div>
  );
}

export default App;
