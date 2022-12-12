import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate'
import './Expenses.css';
//import Card from './Card';

 function ExpenseItem(props){
    const [title, setTitle]= useState(props.title);

    const clickHandler = () =>{
        setTitle('updated');
        console.log("title");
    }
    return(
        <div className="expense-item"> 
       

        <ExpenseDate date={props.date}/>
            
            <div className="expense-item__description"> 
                <h2>{title}</h2>
                <div className="expense-item__prize"> rs{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </div>
    );
 }

 export default ExpenseItem;