import { configureStore } from "@reduxjs/toolkit";
import locationRedux from "./locationReducer";
import userReducer from "./userReducer";

export default configureStore({
    reducer: {
        location: locationRedux,
        user: userReducer
    }
})
