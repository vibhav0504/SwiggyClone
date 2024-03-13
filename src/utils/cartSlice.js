import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:'cart',
    initialState:{
        item:[],
    },
    reducers:{
        addItem:(state,action)=>{
          state.item.push(action.payload);
        },
        clearCart:(state)=>{
         state.item=[];
        },
        removeItem: (state, action) => {
            state.item=state.item.filter((todo)=>todo.id!==action.payload.id) },
    }
});
export const{addItem,clearCart,removeItem}=cartSlice.actions;
export default cartSlice.reducer;