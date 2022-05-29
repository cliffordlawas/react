import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const onFilterChangeData = (expenseFilter) => {
    setFilteredYear(expenseFilter);
  };
  const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={onFilterChangeData}
      />
      <ExpenseChart expenses={filteredExpenses}/>
     <ExpensesList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
