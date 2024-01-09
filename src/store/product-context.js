import React, { createContext, useState } from "react";

const ProductContext = createContext({
    products: [],
});

export const ProductProvider = (props) => {
    const [products, setProducts] = useState();
    const productContext = {
        products: products,
    };
    return (
        <ProductContext.Provider value={productContext}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductContext;
