import React from "react";

const Chart = ({ savingsArray, interestRate, showChart }) => {
  while (!showChart) {
    return null;
  }

  const initialSavings = savingsArray[0];

  const mapSavings = savingsArray.map((amount, i) => {
    return (
      <tr>
        <td>{i}</td>
        <td>${amount}</td>
      </tr>
    );
  });

  return (
    <div className="chart">
      <div className="chart-header">
        <h2>Savings Chart</h2>
        <p>Initial Savings: ${initialSavings}</p>
        <p>Growth Rate: {interestRate}%</p>
      </div>
      <table>
        <tr>
          <th>Year</th>
          <th>Savings Value</th>
        </tr>
        {mapSavings}
      </table>
    </div>
  );
};

export default Chart;
