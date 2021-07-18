import { SET_PRODUCTS, SET_SELECTED_PRODUCT } from './constants';

export const setProduct=(product)=>{
    return{
        type:SET_PRODUCTS,
        payload:product,
    }
}

export const setSelectedProduct=(product)=>{
    return{
        type :SET_SELECTED_PRODUCT,
        payload:product,
    }
}