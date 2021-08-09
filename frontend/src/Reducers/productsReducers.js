import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_SUCCESS } from "../Constants/productConstants";

export const productListReducer = (state = { loading: true, wines: [] }, action) => {
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return { loading: true }
        case PRODUCT_LIST_SUCCESS: 
            return { loading: false, wines: action.payload }
        case PRODUCT_LIST_FAIL: 
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


export const productDetailsReducer = (state = { wine:{}, loading: true }, action) => {
    switch (action.type){
        case PRODUCT_DETAILS_REQUEST: 
            return { loading: true };
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, wine: action.payload }
        case PRODUCT_DETAILS_FAIL: 
            return { loading: false, error: action.payload }
        default: 
            return state;
    }
}