import axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_INFO } from "../Constants/cartConstants";



export const addToCart = (wineId, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/wines/${wineId}`);
    dispatch({
        type: CART_ADD_ITEM, 
        payload: {
            name: data.name,
            image: data.image,
            price: data.price,
            product: data._id,
            stockCount: data.stockCount,
            qty
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = (wineId) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: wineId });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const saveShippingInfo = (data) => (dispatch) => {
    dispatch({type: CART_SAVE_SHIPPING_INFO, payload: data});
    localStorage.setItem('shippingInfo', JSON.stringify(data));
}