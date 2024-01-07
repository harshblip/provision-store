import React, { createContext, useState } from "react";

const ProductContext = createContext();

function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    return (
        <ProductContext.Provider value={{ products, setProducts, cart, setCart }}>
            {children}
        </ProductContext.Provider>
    );
}

export { ProductContext, ProductProvider };