import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart: (state, action) =>{
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id);
            if(existingItem){
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({...newItem, quantity: 1});
            }

            state.totalQuantity += 1;
            state.totalAmount += newItem.price;
        },

        removeFromCart: (state, action) => {
            const id = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id);
            if(existingItem){
                if(existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                    state.totalQuantity -= 1;
                    state.totalAmount -= existingItem.price;
                } else {
                state.totalQuantity -= 1;
                state.totalAmount -= existingItem.price * existingItem.quantity;
                state.cartItems = state.cartItems.filter(item => item.id !== id);
            }
        }
        },

        clearCart: (state) => {
            state.cartItems = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        },

        incrementQuantity: (state, action) => {
            const id = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id);
            if(existingItem) {
                existingItem.quantity += 1;
                state.totalQuantity += 1;
                state.totalAmount += existingItem.price;
            }
        }
    }
});

export const { addToCart, removeFromCart, clearCart, incrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;