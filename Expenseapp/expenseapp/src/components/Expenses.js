import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseDate from "./ExpenseDate";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import Card from "./UI/Card";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("");

  const filterChangeHandler = (event) => {
    console.log(event);
    setFilteredYear(event.target.value);
  };
  const filteredExpenses =
    filteredYear === ""
      ? props.items
      : props.items.filter((expense) => {
          return expense.date.getFullYear().toString() === filteredYear;
        });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler} // what it means we are passing two functions or what?
        />
        {/* why the above code */}
        {filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id} //whenever we use map to render any array of data we need a key to identify the data.
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
        <ExpensesChart expenses={filteredExpenses} />

        {/* <ExpenseDate date={props.date1}/> */}
      </Card>
    </div>
  );
}

export default Expenses;
