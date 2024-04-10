import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import cartSlice from "../slices/cart"

const { addProduct } = cartSlice.actions;
export const Products = () => {

    const dispatch = useDispatch();
    const productsInStore = useSelector(state => state.cart.products)
    const [products, setProducts] =  useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
            setProducts(data);
        });
    }, []);

    useEffect(() => {
        console.log("Products in store", productsInStore);
    }, [productsInStore]);
    
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
        <h1>Products</h1>
        <ul>
            {products.map((product, index) => {
                return (
                    <li style={{ display: "flex", flexDirection: "column", listStyle: "none"}} key={product.id ?? index.toString()}>
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <img src={product.image} alt={product.title} />
                        <button onClick={(e) => dispatch(addProduct(product)) } >Add to cart</button>
                    </li>
                );
            })}
        </ul>
    </div>
  )
}
