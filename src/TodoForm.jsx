import { useState } from "react";
import {useSelector ,useDispatch} from 'react-redux';
import {addTodo} from './redux/action';


const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch =useDispatch();
  const todos=useSelector(state => console.log(state));

  const handleSubmission = (e) => {
    e.preventDefault();
    // addTodo({ title, content });
    dispatch(addTodo(title,content));

    setTitle("");
    setContent("");
  };

  return (
    <div className ="mb-3">
      <h3 className="text-muted mb-4">TODO List</h3>

      <form onSubmit={handleSubmission} className="bg-info w-50 m-auto border ">
        Title <br />
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        Content <br />
        <textarea
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <button className="my-4 btn btn-dark btn-sm px-4" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
