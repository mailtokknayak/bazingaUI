import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers";

const cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
const checkoutData = []
const initState = {cart: {items: cartItems, checkoutData : checkoutData}};
const store = createStore(
    rootReducers,
    initState,
    applyMiddleware(thunk)
);
export default store;
