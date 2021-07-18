import axios from 'axios';
import React,{useEffect} from 'react'
import Product from './Product';
import {  useDispatch} from 'react-redux';
import {setProduct} from '../actions/index';


function Products() {
     const dispatch = useDispatch();

    const getProducts=async()=>{
        try{
            const {data}= await axios.get('https://fakestoreapi.com/products');
            dispatch(setProduct(data));
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
        getProducts();
    },[])
    return (
        <div className="ui grid container">
            <Product/>
        </div>
    )
}

export default Products
