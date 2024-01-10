import { combineReducers, createStore } from "redux";
import throwCart from "../reducer/throwCart";
import removeCart from "../reducer/removeCart";

const store = createStore(combineReducers({cart: throwCart, remove: removeCart}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export {store}