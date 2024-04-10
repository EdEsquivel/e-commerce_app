import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const product = action.payload;
            state.products.push(product)
        }
    } // Nombre de var igual al param, entonces no es necesario "initialState : initialState"
})

export default cartSlice;