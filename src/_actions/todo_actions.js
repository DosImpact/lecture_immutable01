import { ADD_TODO, DEL_TODO } from "./types";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const delTodo = (payload) => {
  return {
    type: DEL_TODO,
    payload,
  };
};
