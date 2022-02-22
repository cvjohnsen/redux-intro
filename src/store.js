//Step 1:
//Import

import { applyMiddleware, createStore } from "redux";
//import reducer
import reducer from "./reducers/index";

import thunk from "redux-thunk";
//create store
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
