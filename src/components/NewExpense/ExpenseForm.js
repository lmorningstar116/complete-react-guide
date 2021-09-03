import React, {useState} from "react";

import './ExpenseForm.css';

const initialState = {
  enteredTitle: '',
  enteredAmount: '',
  enteredDate: '',
};

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [userInput, setUserInput] = useState(initialState);

  const userInputChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    onSaveExpenseData(expenseData);

    setUserInput(initialState);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" name="enteredTitle" value={userInput.enteredTitle} onChange={userInputChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" name="enteredAmount" value={userInput.enteredAmount} onChange={userInputChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" name="enteredDate" value={userInput.enteredDate} onChange={userInputChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;