import { SET_PRODUCTS, SET_SELECTED_PRODUCT } from '../actions/constants';
const initialState={
    products:[],
}

const productReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_PRODUCTS:{
            return {...state,products:action.payload}
        }
        case SET_SELECTED_PRODUCT:{
            return state;
        }
        default:
            return state;
    }
}

export default productReducer;