import React, { useState, useContext } from 'react'
import { ProductContext } from '../../Context/ProductContext'

function Card() {
  const { products } = useContext(ProductContext);
  return (
    <div>
      {products.map((product, i) => {
        return (
          <div key={i} className='flex'>
            <img src={product.productCategory.productCategoryImage} alt="Product Category" width={40}/>
            <p>{product.productCategory.productCategoryName}</p>
          </div>
        );
      })}
    </div>
  )
}

export default Card