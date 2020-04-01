import React from 'react';

const Chart = ({savingsArray, interestRate, showChart}) => {

    while (!showChart) {
        return null
    }

    const initialSavings = savingsArray[0]

    return(
        <div className="chart">
            <h2>Savings Chart</h2>
            <p>Initial Savings: ${initialSavings}</p>
            <p>Growth Rate: {interestRate}%</p>
        </div>
    )
}

export default Chart