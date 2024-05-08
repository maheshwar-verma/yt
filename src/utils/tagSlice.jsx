import { createSlice } from "@reduxjs/toolkit";

const tagSlice=createSlice({
    name:"tag",
    initialState:{
        
    },
    reducers:{
        addTags:(state,action)=>{
            return {
                ...state,
                ...action.payload
            }
        }
    }
});
export const {addTags}=tagSlice.actions;
export default tagSlice.reducer;