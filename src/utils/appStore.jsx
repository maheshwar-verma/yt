import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import tagSlice from "./tagSlice";

const appStore=configureStore({
    reducer:{
        menu:menuSlice,
        search:searchSlice,
        chat:chatSlice,
        tag:tagSlice,
    }
});
export default appStore;