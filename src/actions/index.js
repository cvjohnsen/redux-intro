export const CREATE_TODO_ITEM = "CREATE_TODO_ITEM";
export const UPDATE_TODO_ITEM = "UPDATE_TODO_ITEM";
export const DELETE_TODO_ITEM = "DELETE_TODO_ITEM";

//Actions are Pure Functions

export const createTodo = (item) => (dispatch) => {
  console.log(item);
  dispatch({ type: CREATE_TODO_ITEM, payload: item });
};

export const updateTodo = (item) => (dispatch) => {
  dispatch({ type: UPDATE_TODO_ITEM, payload: item });
};

export const deleteTodo = (id) => (dispatch) => {
  dispatch({ type: DELETE_TODO_ITEM, payload: id });
};
