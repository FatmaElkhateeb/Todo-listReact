import {ADD_TASK,REMOVE_TASK} from "./action";

const initialState = {
  todoList: [
    {
        title: "learn node js",
        content: "Lorem ipsum dolor sit amet.",
      },
      {
        title: "go to the sea",
        content: "Lorem ipsum dolor sit amet.",
      },
      {
        title: "walk the dog",
        content: "Lorem ipsum dolor sit amet.",
      },
  ],
};

function rootReducer(state = initialState, action) {
switch (action.type) {
  case ADD_TASK:
    return {
      ...state,
      todoList: [
        ...state.todoList,
        action.payload
      ],
    };
    case REMOVE_TASK:
    return {
      ...state,
      todoList :[...state.todoList.filter((todo,i) => i !== action.payload)],
      
    }
  default:
    return state
}


    // if (action.type == ADD_TASK) {
    //   return {
    //     ...state,
    //     todoList: [
    //       ...state.todoList,
    //       action.payload
    //     ],
    //   };
    // }
    // return state;
  }
  export default rootReducer;