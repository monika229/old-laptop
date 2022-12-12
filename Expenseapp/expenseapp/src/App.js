//import logo from './logo.svg';
import React, {useState} from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';


const DUMMY_EXPENSES =[
  {
    id: 'e1',
    title: 'Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
    { id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2019, 2, 12) 
    },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () =>{
  
const[ expenses, setExpenses] = useState(DUMMY_EXPENSES);

const addExpenseHandler= expense => {
  //setExpenses([expense, ...expenses]); js feature not react
  setExpenses((prevExpenses)=> {
    return [expense, ...prevExpenses];
  });
};

  return (
    
    <div >
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses 
      items={expenses}/> 
      {/* this expenses is taken from the 36 line ********************* const[ expenses, setExpenses] = useState(DUMMY_EXPENSES); */}

    </div>
  );
}

export default App;
 