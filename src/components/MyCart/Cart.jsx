import React, { useContext } from 'react'
import { ProductContext } from '../../Context/ProductContext'
import './Cart.css'

export default function Cart() {
    const { products, cart, setCart } = useContext(ProductContext);
    cart.map((x, i) => {
        console.log('hi', x.productCategory.productCategoryName);
    })
    return (
        <div>
            <p className='absolute text-col text-5xl font-bold text-slate-400 mt-24 ml-20'> Your cart </p>
            <hr class="line"/>
        </div>
    )
}
