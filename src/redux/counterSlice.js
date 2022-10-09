import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState:{
        counter:0
    },

    reducers:{
        increment: (state) => {
             state.counter +=1;
        },
        decrement: (state)=>{
            state.counter -= 1;
        },
        addByValue:(state,action) =>{
            state.counter += action.payload
        }
    }
})


export const { decrement,increment,addByValue } = counterSlice.actions;

export default counterSlice.reducer;