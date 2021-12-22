import React, { useState } from "react";

// import ExpenseItem from "./ExpenseItem";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./Expense/ExpenseFilter";
import "./NewExpenseItem.css";

function NewExpenseItem(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  //Function to manage state when a year is selected from the Filter drop down menu
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //Filtering out to output the desired year from the list
  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <ExpensesList items={filteredExpenses} />
      {/* <ExpenseItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      ></ExpenseItem> */}
    </div>
  );
}

export default NewExpenseItem;
