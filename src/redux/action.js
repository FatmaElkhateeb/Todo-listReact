export const ADD_TASK='ADD_TASK';
export const REMOVE_TASK='REMOVE_TASK';


export const addTodo=(title,content)=>{
    return{
        type:ADD_TASK,
        payload:{
            title:title,
            content:content
        }
    }
}

export const removeTodo=(index)=>{
    return{
        type:REMOVE_TASK,
        payload:index
    }
}