import { applyMiddleware, createStore } from "redux";
import { messageReducer } from "./reducer/chatReducer";
import { messageMiddleware } from "./actions/chatAction";
import logger from "redux-logger";
export const store = createStore(
  messageReducer,
  applyMiddleware(messageMiddleware, logger)
);
