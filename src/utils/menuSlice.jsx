import { createSlice } from "@reduxjs/toolkit";

const menuSlice=createSlice({
    name:"menu",
    initialState:{
        isMenuopen:true,
    },
    reducers:{
       toggleMenu:(state)=>{
           state.isMenuopen=!state.isMenuopen;
       },
    },

});
export const {toggleMenu}=menuSlice.actions;
export default menuSlice.reducer; 