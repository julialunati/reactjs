import { ADD_MESSAGE } from "./actions";

const initialState = [];

export const messageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MESSAGE: {
      return [...state, payload];
    }
    // case DELETE_MESSAGE: {
    //   return state.filter(({ id }) => id !== payload);
    // }
    default:
      return state;
  }
};