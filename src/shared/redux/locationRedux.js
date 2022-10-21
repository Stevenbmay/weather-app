import { createSlice } from "@reduxjs/toolkit";


export const locationSlice = createSlice({
    name: "location",
    initialState: [],
    reducers: {
        setLocation: (state, action) => action.payload,
    }
})

export const { setLocation } = setLocation.actions;
export default locationSlice.reducer;