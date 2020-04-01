import React from "react";

const Chart = ({ savingsArray, interestRate, showChart }) => {
  while (!showChart) {
    return null;
  }

  const initialSavings = savingsArray[0];

  const mapSavings = savingsArray.map((amount, i) => {
    return (
      <tr key={i}>
        <td>{i}</td>
        <td>$ {amount}</td>
      </tr>
    );
  });

  return (
    <div className="chart">
      <div className="chart-header">
        <h2>Your Yearly Savings</h2>
        <p>Initial Savings Amount: $ {initialSavings}</p>
        <p>Growth Rate: {interestRate}%</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Savings Value</th>
          </tr>
        </thead>
        <tbody>{mapSavings}</tbody>
      </table>
    </div>
  );
};

export default Chart;
