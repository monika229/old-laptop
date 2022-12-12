import React, {useState} from 'react';
import './App.css';
import AddUser from './componenets/Users/AddUser';
import UsersList from './componenets/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler =(uName, uAge) =>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList, { name:uName, age: uAge, id: Math.random().toString()}];
    });
  };
  return (
    <div className="App">
      
      <AddUser onAddUser={addUserHandler}/>
      {/* function passes to prop  varibale not executed */}
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
