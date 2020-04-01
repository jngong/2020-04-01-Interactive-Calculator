import React, { useState } from "react";
import Intro from "./components/Intro";
import Form from "./components/Form";
import Chart from "./components/Chart";
import "./App.css";

function App() {
  const [savings, setSavings] = useState('');
  const [interestRate, setInterestRate] = useState(0);

  const handleSavingsChange = e => {
    setSavings(e.target.value)
  };

  const handleInterestRateChange = e => {
    setInterestRate(e.target.value)
  }

  return (
    <div className="App">
      <Intro />
      <Form
        savings={savings}
        interestRate={interestRate}
        handleSavingsChange={handleSavingsChange}
        handleInterestRateChange={handleInterestRateChange}
      />
      <Chart />
    </div>
  );
}

export default App;
