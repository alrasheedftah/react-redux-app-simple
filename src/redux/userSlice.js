import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
        userData:{
            name:"",
            email:""            
        },
        error:false,
        loading:false
    },

    reducers:{
        addUser : (state ,action) => {
                state.name = action.payload.name
                state.email = action.payload.email
        },

        successUser: (state,action) => {
            state.loading = false;
            state.userData.name = action.payload.title
            state.userData.email = action.payload.body
        },

        errorUser : (state,action) => {
            state.loading = false;
            state.error = false;
        },
        startLoading : (state) =>{
            state.loading = true;
        }
        
    }
})


export const {addUser,errorUser,successUser,startLoading} = userSlice.actions;

export default userSlice.reducer