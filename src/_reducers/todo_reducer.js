import { ADD_TODO, DEL_TODO } from "../_actions/types";
import { Record } from "immutable";

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
