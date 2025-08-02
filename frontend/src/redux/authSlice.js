import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        loading:false,
        user:null
    },
    reducers:{
        setLoading:(state,action)=>{
            state.loading = action.payload;
        },
        setUser:(state,action) =>{
            state.user=action.payload;
        }
    }
});

export const {setUser} = authSlice.actions;
export const {setLoading} = authSlice.actions;
export default authSlice.reducer 