import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../redux/reducer";
import ThunkMiddleware from "redux-thunk";

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(
  rootReducer,
  composerEnhancer(applyMiddleware(ThunkMiddleware))
);

export default store;
