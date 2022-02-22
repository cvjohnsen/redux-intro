//Step 1:
//Import

import { createStore } from "redux";
//import reducer
import reducer from "./reducers/index";
//create store
const store = createStore(reducer);

export default store;
