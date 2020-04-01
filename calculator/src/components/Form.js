import React from "react";

export const Form = ({
  initialSavings,
  interestRate,
  handleSavingsChange,
  handleInterestRateChange,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Initial Savings Amount ($)
        <input
          type="text"
          name="initialSavings"
          value={initialSavings}
          onChange={handleSavingsChange}
        />
      </label>

      <label>
        Bank Interest Rate (%)
        <input
          type="text"
          name="interestRate"
          value={interestRate}
          onChange={handleInterestRateChange}
        />
      </label>
      <button>Calculate Savings</button>
    </form>
  );
};

export default Form;
