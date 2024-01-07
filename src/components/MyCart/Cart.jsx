import React, { useContext } from 'react'
import { ProductContext } from '../../Context/ProductContext'

export default function Cart() {
    const { products, cart, setCart } = useContext(ProductContext);
    cart.map((x, i) => {
        console.log('hi', x.categoryName);
    })
    return (
        <div>
cart
        </div>
    )
}
