import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    valor: "Home",
    valor2: {}
}

export const countSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        goToHome: (state) => {
            state.valor = "Home"
        },
        goTodetail: (state) => {
            state.valor = "Detail"
        },
        getMovieDetail: (state, action) => {
            state.valor2 = action.payload
        }
    },
})

export const { goToHome, goTodetail, getMovieDetail } = countSlice.actions;

export default countSlice.reducer;