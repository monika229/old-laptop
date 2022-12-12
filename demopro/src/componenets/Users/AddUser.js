// this is the component that fetches user input

import React, { Fragment, useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUsers.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";





const AddUsers = (props) => {
  //both refs aere intialized as undefined not null;
const nameInputRef = useRef();
// connecting it with the first input which accept name as an input
const ageInputRef = useRef();
// connecting it with the second input which accept age as an input

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  //in intial state we are not passing any value to error variable then it will be undefined
  const [error, setError] = useState();

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };
  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName= nameInputRef.current.value;
    const enteredUserAge= ageInputRef.current.value;
    if(enteredName.trim().length ===0 || enteredUserAge.trim().length === 0){
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      });
        return;
    }
    if(+enteredUserAge<1){
        //+ SIGN IS USED TO LET THE COMPILER AND BROWSER THAT IT'S AN INTEGER 
        //Because JS considers every things as STRING 
        setError({
          title:'Invalid Error',
          message: 'Please enter a valid age (> 0 ).'
        });
        return;
    }

    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value= '';
    ageInputRef.current.value= '';
    // setEnteredUsername("");
    // setEnteredAge("");
    /*after this two statement our two input field doesnot get clear after submitting the form  
        the problem is that we don't reflect our current state in the input. that's not a problem as long as we don't wana change it from anywhere else thasn user keystrokes
        but here I want to change it when the form is submitted
        So I wanna feed the current staTE FOR ENTERED USERNAME and ENTEREDAGE back into those inputs.
        we can do with props
        this values have VALUE props and we can set those props to values which will then be reflected in the inputs
        */
  };

  const errorHandler= () =>{
    //setEnteredAge(event.target.value);
    setError(null);
  };
  
  return (
    <Fragment>
    
      {error && <ErrorModal title={error.title}  message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        {/* for attribute  in html */}
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          // value={enteredUsername}
          // onChange={usernameChangeHandler} 
          ref={nameInputRef}
          />
          
        <label htmlFor="age">Age(Years)</label>
        <input
          id="age"
          type="number"
          // value={enteredAge}
          // onChange={ageChangeHandler} 
          ref={ageInputRef}
          />
        <Button type="submit"> Add User</Button>
      </form>
    </Card>
    </Fragment>

  );
};

export default AddUsers;
