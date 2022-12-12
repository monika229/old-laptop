
import React, { useEffect } from 'react'
import Todo from './components/Todo';
import ShowTodo from './components/ShowToDo';

function App() {
  /*const [todo, setTodo] = useState({});
  useEffect(() => {
    setTodo({
      task: "testTask",
      id: 123,
    })
  } )*/
    return (
        <div>
            <Todo />
            <ShowTodo  />
        </div>
    )
}

export default App;