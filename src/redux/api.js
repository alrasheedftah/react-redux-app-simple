import axios from "axios";
import { errorUser, startLoading, successUser } from "./userSlice"

export const addUserApi = async (user,dispatch) => {
    dispatch(startLoading());
    try {
        const res = await axios.post("https://jsonplaceholder.typicode.com/posts",{title:user.name,body:user.email})

        dispatch(successUser(res.data))
    } catch (error) {
        dispatch(errorUser())
    }
}