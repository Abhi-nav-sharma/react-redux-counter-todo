export const actionConstants = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
  TOGGLE_TODO_STATUS: "TOGGLE_TODO_STATUS",
  INCREMENT_COUNTER: "INCREMENT_COUNTER",
  DECREMENT_COUNTER: "DECREMENT_COUNTER"
};

export const decrementCounter = (amount) => ({
  type: actionConstants.DECREMENT_COUNTER,
  payload: amount
});

export const incrementCounter = (amount) => ({
  type: actionConstants.INCREMENT_COUNTER,
  payload: amount
});

export const addTodo = ({ title, status, id }) => {
  return {
    type: actionConstants.ADD_TODO,
    payload: {
      title,
      status,
      id
    }
  };
};

export const removeTodo = (id) => {
  return {
    type: actionConstants.REMOVE_TODO_ITEM,
    payload: {
      id: id
    }
  };
};

export const toggleTodo = (id) => {
  return {
    type: actionConstants.TOGGLE_TODO_STATUS,
    payload: {
      id: id
    }
  };
};
