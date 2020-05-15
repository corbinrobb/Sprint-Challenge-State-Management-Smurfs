import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./App.css";
import SmurfList from './SmurfList';
import SmurfForm from "./SmurfForm";

import { SmurfContext } from '../contexts/SmurfContext';


const App = () => {
  const [ smurfs, setSmurfs ] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => setSmurfs(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <SmurfContext.Provider value={{ smurfs, setSmurfs }}>
        <SmurfForm />
        <SmurfList />
      </SmurfContext.Provider>
    </div>
  );
}

export default App;
