import React, {useState} from 'react';
import Intro from './components/Intro'
import Form from './components/Form'
import Chart from './components/Chart'
import './App.css';

function App() {

  return (
    <div className="App">
        <Intro />
        <Form />
        <Chart />
    </div>
  );
}

export default App;
