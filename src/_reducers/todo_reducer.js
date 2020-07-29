import { addTodo, delTodo } from "../_actions/todo_actions";
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
    case addTodo:
      return [...state];
    case delTodo:
      return [...state];
    default:
      return state;
  }
};
