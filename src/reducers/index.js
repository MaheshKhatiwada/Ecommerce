import {productReducer,selectedProductReducer }from "./productReducer";
import { combineReducers } from "redux";

const rootReducer=combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer
})

export  default rootReducer;