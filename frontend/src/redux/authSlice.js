import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        Loading:false,
        user:null
    },
    reducers:{
        setLoading:(state,action)=>{
            state.Loading = action.payload;
        },
        setUser:(state,action) =>{
            state.user=action.payload;
        }
    }
});

export const {setUser} = authSlice.actions;
export const {setLoading} = authSlice.actions;
export default authSlice.reducer 