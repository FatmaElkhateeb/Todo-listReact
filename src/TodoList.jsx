import {useDispatch} from 'react-redux';
import {removeTodo} from './redux/action';


const TodoList = ({ todos }) => {

 const dispatch = useDispatch();

 const deleteTodo=(index)=>{
   dispatch(removeTodo(index))
 }


  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          <ul key={i}>
            <li className="border d-flex w-50 m-auto">
            <div className="text">
              <p>Title : {todo.title}</p>
              <p>Content : {todo.content}</p>
              <button onClick={()=>deleteTodo(i)} className="btn btn-primary m-1 ">Delete</button>
            </div>
            </li>
          </ul>
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );

  return (
    <div className="text-left">
      <h5 className="mx-5 text-muted text-center">Todos List</h5>
      {todosList}
    </div>
  );
};

export default TodoList;
