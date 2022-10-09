import { BYVALUE, DECREMENT, INCREMENT } from "./types"


export  const increment = (dispatch) => {
    return dispatch({type : INCREMENT})
}


export  const decrement = (dispatch) => {
        return dispatch({type : DECREMENT})
}

export const addByValue = async (dispatch,value) => {
    return dispatch({
        type:BYVALUE,
        value : value

    });
}

