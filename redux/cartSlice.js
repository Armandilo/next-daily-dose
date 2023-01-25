import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products: [],
        quantity:0,
        total:0,
    },
    reducers:{
        addProduct:(state,action) =>{
            state.products.push(action.payload);
            state.quantity += 1;
            state.total += action.payload.price;
            
        },
        delProduct:(state,action) =>{
            const productId = action.payload._id;
            state.products = state.products.filter((products)=>products._id !== productId)
            state.quantity -= 1;
            state.total -= action.payload.price;


        },
        reset:(state)=>{
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        }
    },
});

export const {addProduct,reset, delProduct} = cartSlice.actions;
export default cartSlice.reducer;