//General Note:
//If you're working w/ a lot of state..Make separate reducers!
//Step 1: Import Actions
// import { store } from "../store";
import {
  CREATE_TODO_ITEM,
  UPDATE_TODO_ITEM,
  DELETE_TODO_ITEM,
} from "../actions/index";

const initialState = {
  TODO: [
    {
      id: 0,
      task: "STUDY REDUX",
      completed: false,
    },
  ],
};

function reducer(TODO = initialState, action) {
  switch (action.type) {
    case CREATE_TODO_ITEM:
      return {
        ...TODO,
        TODO: [...TODO, action.payload],
      };
    //Pretend => body {id, task, complete}
    case UPDATE_TODO_ITEM:
      return {
        ...TODO,
        TODO: [], //in a min
      };
    case DELETE_TODO_ITEM:
      return {
        ...TODO,
        TODO: [], //logic
      };
    default:
      return TODO;
  }
}

export default reducer;
