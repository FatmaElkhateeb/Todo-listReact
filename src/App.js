import { useState } from "react";
import {useSelector} from 'react-redux';

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const todoList = useSelector(state =>state.todoList);
  const [todos, setTodos] = useState([todoList] );

  // const addTodo = (task) => {
  //   setTodos([...todos, task]);
  // };

  // const deleteTodo = (index) => {
  //   setTodos(todos.filter((todo,i) => i !== index))
  // }

  return (
    <div className="text-center py-2">
      <TodoForm />
      <TodoList todos={todoList}  />
    </div>
  );
}

export default App;
