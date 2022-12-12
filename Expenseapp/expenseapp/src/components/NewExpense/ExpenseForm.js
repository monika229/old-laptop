import React,{useState} from 'react';
import './ExpenseForm.css';


const ExpenseForm = (props)=> {

    const [enteredTitle,setenteredTitle] =useState('');
        const [enteredAmount,setenteredAmount] =useState('');
        const [enteredDate,setenteredDate] =useState('');

        const titleHandler= (event) => {
            setenteredTitle(event.target.value);
        };
        const amountChangeHandler= (event)=>{
            setenteredAmount(event.target.value);
        }

        const dateChangeHandler= (event)=>{
            setenteredDate(event.target.value);
        }


    const submitHandler=(event) =>{
        event.preventDefault();
        const expenseData={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
   
    props.onSaveExpenseData(expenseData);//meaning of this line????
    setenteredTitle ('') ;
    setenteredAmount ('') ;
    setenteredDate ('');

    }
    return( 
       


 /*const[userInput, setUserInput]= useState({
    enteredTitle: '' ,
    enteredAmount: '' ,
    enteredDate: '',
});
    const titleHandler = () =>{
    setUserInput((prevState) => {
    return  {...prevState, enteredTitle: event.target.value};
    )};

    const amonutHandler = () =>{
    setUserInput((prevState) => {
    return  {...prevState, enteredAmount: event.target.value};
    )};

    const dateHandler = () =>{
    setUserInput((prevState) => {
        return  {...prevState, enteredDate: event.target.value};
        )};*/


        
    


        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className= 'new-expense__control'>
                    <label>Title </label>
                    <input 
                        type='text' 
                        value={enteredTitle}
                        onChange={titleHandler}
                     />
                </div>


                <div className='new-expense__control'>
                    <label>Amount </label>
                    <input 
                    type='number' 
                    min="0.01" step="0.01" 
                    value={enteredAmount} 
                    onChange={amountChangeHandler}
                    />
                </div>


                <div className='new-expense__control'>
                    <label>Date </label>
                    <input 
                        type='date'
                        min="2019-01-01"
                        max="2022-12-31" 
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
         </form>
    
)

}

/*single state syntax
const[userInput, setUserInput]= useState({
        enteredTitle: '' ,
        enteredAmount: '' ,
        enteredDate: '',
});

setUserInput({
    ...userInput,
    enteredTitle: event,target,value;
})*/


export default ExpenseForm ;