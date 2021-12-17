import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterdYear, setfilterdYear] = useState("2022");
  const filterYearChangeHandler = (year) => {
    setfilterdYear(year);
  };
  const filterdExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filterdYear;
  });

  

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterdYear}
        filterYearChange={filterYearChangeHandler}
      />
      <ExpensesChart expenses={filterdExpenses} />
      <ExpensesList items={filterdExpenses} /> 
    </Card>
  );
};

export default Expenses;
