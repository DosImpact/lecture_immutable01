import { ADD_TODO, DEL_TODO } from "../_actions/types";
import { List, Map, Record } from "immutable";

const Todo = Record({
  name: null,
  id: null,
  createAt: Date.now(),
  willcompleteAt: null,
  processState: 0,
});

const State = Record([]);

export default (state = new State(), action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state];
    case DEL_TODO:
      return [...state];
    default:
      return state;
  }
};
