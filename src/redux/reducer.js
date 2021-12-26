import { actionConstants } from "./action";

const initState = {
  todos: [
    {
      title: "Buy Bread",
      status: false,
      id: 1
    }
  ],
  counter: 0
};

export default function reducer(state = initState, action) {
  console.log(state, action);
  switch (action.type) {
    case actionConstants.ADD_TODO: {
      return { ...state, todos: [...state.todos, action.payload] };
    }
    case actionConstants.REMOVE_TODO_ITEM: {
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action?.payload?.id)
      };
    }
    case actionConstants.TOGGLE_TODO_STATUS: {
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, status: !item.status }
            : item
        )
      };
    }
    case actionConstants.INCREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter + action?.payload
      };
    }
    case actionConstants.DECREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter - action?.payload
      };
    }
    default: {
      return state;
    }
  }
}
