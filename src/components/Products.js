import axios from 'axios';
import React,{useEffect} from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import {setProduct} from '../actions/index';
import "../Css/Products.css";

function Products() {
    const products = useSelector(state => state.allProducts.products);
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

    console.log(products);
    return (
        <div className="products">
            <h2>Products List</h2>
        </div>
    )
}

export default Products
