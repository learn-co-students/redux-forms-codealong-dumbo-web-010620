export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type){
    case 'ADD_TODO':

      console.log(state.todos)
      // console.log({ todos: 
      // state.todos.concat(action.payload.text)})

      return {
        todos: [...state.todos, action.payload.text]
      }

    default:
      return state 
  }
  // console.log("reducer received this action:", action);
  // return state;
}
