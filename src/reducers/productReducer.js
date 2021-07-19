import { SET_PRODUCTS, SET_SELECTED_PRODUCT,REMOVE_SELECTED_PRODUCT } from '../actions/constants';
const initialState={
    products:[],
}

export const productReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_PRODUCTS:{
            return {...state,products:action.payload}
        }
        default:
            return state;
    }
}

export const selectedProductReducer=(state={},action)=>{
    switch (action.type) {
        case SET_SELECTED_PRODUCT:{
            return {...state,...action.payload}
        }
        case REMOVE_SELECTED_PRODUCT:{
            return {}
        }
        default:
            return state;
}}