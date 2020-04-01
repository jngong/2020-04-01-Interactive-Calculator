import React, { useState } from "react";
import Intro from "./components/Intro";
import Form from "./components/Form";
import Chart from "./components/Chart";
import "./App.css";

function App() {
  const [initialSavings, setInitialSavings] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [showChart, setShowChart] = useState(false);
  const [savingsArray, setSavingsArray] = useState([]);

  const handleSavingsChange = e => {
    setInitialSavings(e.target.value);
  };

  const handleInterestRateChange = e => {
    setInterestRate(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!initialSavings || !interestRate) {
      alert("Please enter both your initial savings and bank interest rate.")
    }  else {
      calculateSavings();
    }
  };

  const calculateSavings = () => {
    const initialAmount = parseFloat(initialSavings);
    const interestRatePercent = parseFloat(interestRate / 100);
    console.log(initialAmount)
    console.log(interestRatePercent)

    if (isNaN(initialAmount) || isNaN(interestRatePercent)) {
      alert("Please only enter numbers")
      return
    }

    const years = 5;
    const savingsData = [initialAmount];

    for (let i = 0; i < years; i++) {
      let nextAmount = savingsData[i] + savingsData[i] * interestRatePercent;
      nextAmount = parseFloat(nextAmount.toFixed(2));
      savingsData.push(nextAmount);
    }
    setSavingsArray(savingsData);
    setShowChart(true);
  };

  return (
    <div className="App">
      <Intro />
      <Form
        initialSavings={initialSavings}
        interestRate={interestRate}
        handleSavingsChange={handleSavingsChange}
        handleInterestRateChange={handleInterestRateChange}
        handleSubmit={handleSubmit}
      />
      <Chart
        savingsArray={savingsArray}
        interestRate={interestRate}
        showChart={showChart}
      />
    </div>
  );
}

export default App;
