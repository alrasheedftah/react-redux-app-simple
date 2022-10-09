import { createStore } from "redux";
import counterReducer from "./reducers/counter.redycer";
import reducers from './reducers'
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import userSlice from "./userSlice";

// const store = createStore(reducers);

const store = configureStore({
    reducer:{
        counter : counterSlice,
        user : userSlice
    }
})

export default store;