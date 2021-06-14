import React from 'react';
import ExpenseItem from "./ExpenseItem";

import './Expenses.css';

const Expenses = ({expenses}) => {
  return (
    <div className="expenses">
      {
        expenses.map(item => <ExpenseItem key={item.id} date={item.date} title={item.title} amount={item.amount}/>)
      }
    </div>
  );
};

export default Expenses;