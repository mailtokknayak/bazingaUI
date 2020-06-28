import {ADD_TO_CART, REMOVE_FROM_CART, CART_CHECKOUT} from "./types";
import axios from "axios";

export const addToCart = (items, product) => (dispatch) => {
    const cartItems = items.slice();
    let productAlreadyInCart = false;

    cartItems.forEach((cp) => {
        if (cp.id === product.id) {
            cp.count += 1;
            productAlreadyInCart = true;
        }
    });

    if (!productAlreadyInCart) {
        cartItems.push({...product, count: 1});
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({type: ADD_TO_CART, payload: {cartItems}});
};


export const handleCartCheckout = (products) => (dispatch) => {
    const list = [];
    products.forEach((product) => {
        const obj = {
            "productId": product.id,
            "quantity": product.count,
            "title": product.title,
            "price": product.price
        }
        list.push(obj)
    })

    const payload =
        {
            "orderId": Math.floor(Math.random() * 100),    // returns a random integer from 0 to 99,
            "finalAmount": 0,
            "selectedItems": list
        }
    axios.post("http://localhost:8080/api/v1/cartCheckout", payload)
        .then((response) => {
            const checkoutData = response.data
            localStorage.removeItem('cartItems');
            dispatch({type: CART_CHECKOUT, payload: {cartItems: [], checkoutData: checkoutData}});
        })
        .catch((error) => {
            alert("checkout API is not working")
        })
}

export const removeFromCart = (items, product) => (dispatch) => {
    const cartItems = items.slice().filter((a) => a.id !== product.id);
    dispatch({type: REMOVE_FROM_CART, payload: {cartItems}});
};


