import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../actions";

function ProductDetail() {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      dispatch(setSelectedProduct(data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (productId && productId !== "") getProduct();
  }, [productId]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column 1p">
                <img className="ui fluid image" src={image}  alt={title}/>
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a href="/#" className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block ">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content ">Add to cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
