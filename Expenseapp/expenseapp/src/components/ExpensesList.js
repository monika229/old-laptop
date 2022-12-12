import React from 'react';
const ExpensesList = props => {
    //let expensesCon
    {filteredExpenses.map((expense) => (
        <ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date}/>
        ))}

};

export default ExpenseList;