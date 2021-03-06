import { createStore, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

export default store;
