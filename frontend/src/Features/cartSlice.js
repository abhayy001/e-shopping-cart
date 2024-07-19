import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers:{
        addToCart(state, action){
            const product = {...action.payload, quantity: 1};
            state.cartItems.push(product);
            state.totalQuantity += 1;
            state.totalAmount += product.price;
        },

        removeCartItem(state, action){
            state.cartItems = state.cartItems.filter((items)=> items.id !== action.payload.id)
        }, 

        clearCart(state){
            state.cartItems = []
        },

        incItemQty(state, action){
            for (var i = 0; i < state.cartItems.length; i++) {
                if (state.cartItems[i].id === action.payload.id) {
                  state.cartItems[i].quantity++;
                }
              }
        }, 

        decItemQty(state, action){
            for (var i = 0; i < state.cartItems.length; i++) {
                if (state.cartItems[i].id === action.payload.id) {
                    if(state.cartItems[i].quantity > 1){
                  state.cartItems[i].quantity--;
                    }else{
                        console.log('dfsfs')
                    }
                }
              }
        }, 
    }

})

export const {addToCart, removeCartItem, clearCart, incItemQty, decItemQty} = cartSlice.actions;

export default cartSlice.reducer;
