import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    tab: "Home",
    signUpData: null,
    loading: false,
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
    accountType: "Buyer",
    categories: []
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setToken(state, value) {
            state.token = value.payload;
        },
        setLoading(state, value) {
            state.loading = value.payload;
        },
        setSignUpData(state, value) {
            state.signUpData = value.payload;
        },
        setTab(state, value) {
            state.tab = value.payload
        },
        setAccountType(state, value) {
            state.accountType = value.payload
        },
        addToCategory(state, action) {
            const category = action.payload
            state.categories.push(category);
        }
    }
});

export const {setToken, setLoading, setSignUpData, setTab, setAccountType, addToCategory} = authSlice.actions;
export default authSlice.reducer;