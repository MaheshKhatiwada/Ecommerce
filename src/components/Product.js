import React from 'react'
import {useSelector} from 'react-redux';

function Product() {
    const products = useSelector(state => state.allProducts.products);
    const renderList=products.map((product)=>{
        const {id,title,image,price,category}=product;
        return(
            <div class="ui link cards">
  <div class="card">
    <div class="image">
      <img src={image} alt ={title}/>
    </div>
    <div class="content">
      <div class="description">{title}</div>
      <div className="meta price">${price}</div>
      <div className="meta">{category}</div>
    </div>
    <div class="extra content">
    </div>
  </div>
  </div>
)

    })

    return (
        <>
        {renderList}
        </>
    )
}

export default Product
