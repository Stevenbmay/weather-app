import { configureStore } from "@reduxjs/toolkit";
import locationRedux from "./locationRedux";

export default configureStore({
    reducer: {
        location: locationRedux
    }
})
