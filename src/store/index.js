import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import postReducer from "./post/reducer";
import authReducer from "./auth/reducer";
const rootReducer = combineReducers({
  POST: postReducer,
  AUTH: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
