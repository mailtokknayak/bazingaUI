import { FETCH_PRODUCTS } from "./types";
import axios from 'axios';


export const fetchProducts = () => (dispatch) => {
    axios.get("http://localhost:8080/api/v1/allProducts")
        .then((res) => res.json())
        .catch((err) =>
            fetch("seed.json")
                .then((res) => res.json())
                .then((data) => data.products)
        )
        .then((data) => {
            dispatch({ type: FETCH_PRODUCTS, payload: data });
        });

};

