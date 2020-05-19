import { ON_MESSAGE } from "../types/chatTypes";

const initState = [{ text: "hey, can may i help you? Example: I can help you reach Blaise. ", sender: "bot" }];
export const messageReducer = (state = initState, action) => {
  switch (action.type) {
    case ON_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
};
