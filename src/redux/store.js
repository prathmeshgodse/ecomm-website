import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

//Setup Middleware

const middlewares = [logger];

//Make Store

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
