import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || true,
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem('data') || {},
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers : {
        logout : (state, action) => {
            console.log(logout);
        }
    }
})

export const {logout} = authSlice.actions;
export default authSlice.reducer;