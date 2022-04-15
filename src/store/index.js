import { profileReducer } from "./profile/reducer";
import { messagesReducer } from "./message/reducer";
import { combineReducers, createStore } from "redux";
import { chatsReducer } from "./chat/reducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
