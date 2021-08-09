import axios from "axios";
import { ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_FAIL, ORDER_DETAILS_SUCCESS, MY_ORDER_LIST_REQUEST, MY_ORDER_LIST_FAIL, MY_ORDER_LIST_SUCCESS } from "../Constants/orderConstants";
import { CART_EMPTY } from "../Constants/cartConstants";

export const createOrder = (order) => async (dispatch, getState) => {
    dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
    try {
      const { userSignIn: { userInfo } } = getState();
      const { data } = await axios.post("/api/orders", order, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      });
      dispatch({ type: ORDER_CREATE_SUCCESS, payload: data.order });
      dispatch({ type: CART_EMPTY });
      localStorage.removeItem("cartItems");
    } catch (error) {
      dispatch({ type: ORDER_CREATE_FAIL, payload: error.response && error.response.data.message ? error.response.data.message :  error.response  });
    }
  }

  export const detailsOrder = (orderId) => async (dispatch, getState) => {
    dispatch({ type: ORDER_DETAILS_REQUEST, payload: orderId });
    const { userSignIn: { userInfo } } = getState();
    try{
      const { data } = await axios.get(`/api/orders/${orderId}`, {
        headers: { Authorization: `Bearer ${userInfo.token}`}
      });
      dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      const message = error.response && error.response.data.message ? error.response.data.message :  error.response;
      dispatch({ type: ORDER_DETAILS_FAIL, payload: message });
    }
  }


export const myOrderList = () => async (dispatch, getState) => {
  dispatch({type: MY_ORDER_LIST_REQUEST});
  const { userSignIn: {userInfo} } = getState();
  try{
    const { data } = await axios.get('/api/orders/mine', {
      headers: { Authorization: `Bearer ${userInfo.token}`}
    });
    dispatch({type: MY_ORDER_LIST_SUCCESS, payload: data});
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message :  error.response;
    dispatch({type: MY_ORDER_LIST_FAIL, payload: message});
  }
} 