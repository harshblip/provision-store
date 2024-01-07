import React, { useState, useContext } from 'react'
import { ProductContext } from '../../Context/ProductContext'
import './Cart.css'

export default function Cart() {
    const { products, cart, setCart } = useContext(ProductContext);
    const [count, setCount] = useState(0);
    cart.map((x, i) => {
        console.log('hi', x.productCategory.productCategoryName);
    })
    const addItem = () => {
        setCount(count + 1);
    }

    const subtractItem = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <p className=' text-col text-5xl font-bold text-slate-400 mt-24 ml-20'> Your cart </p>
            <div className='grid-container gap-6'>
                {
                    cart.map((product, i) => {
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
                                                className=' mt-4 p-1 rounded-md w-[9rem] '
                                                style={{ backgroundColor: '#ff6767' }}>
                                                Added to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }

            </div >
        </div>
    )
}
