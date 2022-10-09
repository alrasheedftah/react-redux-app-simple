import { combineReducers } from "redux";
import counterReducer from "./counter.redycer";
import { userReducer } from "./userReducer";

export default combineReducers({
    counter : counterReducer,
    user : userReducer
})