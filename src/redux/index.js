  import { createStore } from "redux";
  
  const textState = {
      text: '',
      todo:[]
  };
  
const todoReducer = (state = textState, action) => {
    switch (action.type) {
        case 'value':
            return { ...state, text: action.payload };
        case 'addtodo':
            return { ...state, todo: [...state.todo, action.payload] };
        default:
            return state;
    }
};

  
  const store = createStore(todoReducer);
  
  export default store;