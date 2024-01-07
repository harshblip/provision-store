import React, { useState, useContext } from 'react'
import { ProductContext } from '../../Context/ProductContext'
import './Card.css'

function Card() {
  const { products, cart, setCart } = useContext(ProductContext);
  const [count, setCount] = useState(0);
  const handleCartClick = (item) => {
    const index = cart.findIndex(cartItem => cartItem.productCategory.orderIndex === item.productCategory.orderIndex);
    let newCart;

    if (index > -1) {
      // Item is already in the cart, remove it
      newCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
    } else {
      // Item is not in the cart, add it
      newCart = [...cart, item];
    }

    setCart(newCart);
  };

  const addItem = () => {
    setCount(count + 1);
  }

  const subtractItem = () => {
    setCount(count - 1);
  }

  console.log('cart', cart);

  return (
    <>
      <div className='grid-container gap-6'>
        {
          products.map((product, i) => {
            const isInCart = cart.some(cartItem => cartItem.productCategory.orderIndex === product.productCategory.orderIndex); // Check if the product is in the cart
            return (
              <div>
                <div key={i} className='flex rounded-md shadow-md bg-white/80 mt-4 p-5 w-[30rem]'>
                  <div className='bg-orange-200 p-2 rounded-md'>
                    <img src={product.productCategory.productCategoryImage} alt="Product Category" width={50} className='p-1' />
                  </div>
                  <div className='flex flex-col ml-4'>
                    <p>{product.productCategory.productCategoryName}</p>
                    <div className='absolute flex justify-between mt-6'>
                      <div className='flex text-sm h-8 mt-4 mr-12 space-x-4'>
                        <button class="material-symbols-outlined border-2 rounded-lg" onClick={addItem}>
                          add
                        </button>
                        <p className='mt-[0.4rem]'>{count}</p>
                        <button class="material-symbols-outlined border-2 rounded-lg" onClick={subtractItem}>
                          remove
                        </button>
                      </div>
                        <button
                          onClick={() => handleCartClick(product)}
                          className=' mt-4 p-1 rounded-md w-[9rem] '
                          style={{ backgroundColor: isInCart ? '#ff6767' : '#80ed99' }}>
                          {isInCart ? 'Remove from cart' : 'Add to cart'}
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        }

      </div >
    </>
  )
}

export default Card