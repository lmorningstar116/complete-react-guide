import React, {useState} from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import './Expenses.css';
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expenses = ({expenses}) => {
  const [filteredYear, setFilteredYear] = useState(null);

  const selectYearHandler = (year) => {
    setFilteredYear(year);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onSelectYear={selectYearHandler} />
      {
        expenses
          .filter(it => {
            if (filteredYear === null) {
              return true;
            }

            const year = it.date.getFullYear().toString();
            return year === filteredYear;
          })
          .map(item => <ExpenseItem key={item.id} date={item.date} title={item.title} amount={item.amount}/>)
      }
    </Card>
  );
};

export default Expenses;