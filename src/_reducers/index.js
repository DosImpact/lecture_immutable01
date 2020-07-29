import { combineReducers } from "redux";
import todo from "./todo_reducer";
import counterStore from "./counter_reducer";

const rootReducer = combineReducers({
  todo,
  counterStore,
});

export default rootReducer;
