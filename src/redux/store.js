import { createStore } from "redux";
import { allReducer } from "./reducers";

export const store = createStore(allReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



