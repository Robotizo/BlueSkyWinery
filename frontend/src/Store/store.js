import { wineslist } from "../Lists/winelist.js";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { productDetailsReducer, productListReducer } from "../Reducers/productsReducers";
import { cartReducer } from "../Reducers/cartReducers";
import { userRegisterReducer, userSignInReducer } from "../Reducers/userReducers.js";
import { myOrderListReducer, orderCreateReducer, orderDetailsReducer } from "../Reducers/orderReducers.js";





const initialState = {
    userSignIn: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    },
    cart: {
        cartItems: localStorage.getItem('cartItems') 
            ? JSON.parse(localStorage.getItem('cartItems')) 
            : [],
        shippingInfo: localStorage.getItem('shippingInfo') ? JSON.parse(localStorage.getItem('shippingInfo')) : {},
    }
};

// const reducer = (state, action) => {
//     return {wines: wineslist};
// };




const reducer = combineReducers({
    wineList: productListReducer,
    wineDetails: productDetailsReducer,
    cart: cartReducer,
    userSignIn: userSignInReducer, 
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    myOrderListFetch: myOrderListReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));


export default store;