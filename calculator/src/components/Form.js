import React from "react";

export const Form = ({ savings, interestRate, handleSavingsChange, handleInterestRateChange }) => {
  return (
    <form>
      <label>
        Initial Savings (in USD$)
        <input
          type="text"
          name="savings"
          value={savings}
          onChange={handleSavingsChange}
        />
      </label>
      
      <label>
        Bank Interest Rate(%)
        <input
          type="text"
          name="interestRate"
          value={interestRate}
          onChange={handleInterestRateChange}
        />
      </label>
      <button>
          Calculate Savings
      </button>
    </form>
  );
};

export default Form;
