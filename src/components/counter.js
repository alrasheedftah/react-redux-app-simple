import React, { useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addByValue, decrement, increment } from "../redux/actions/counterAction";
import { BYVALUE } from "../redux/actions/types";
import { addByValue, decrement, increment } from "../redux/counterSlice";

export default function Counter(){

    const [count,setCount] = useState(0);

    const {counter} = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const incrementValue = () => {
        // setCount(count+1);

        // increment(dispatch)

        dispatch(increment())
    }

    const decrementValue = () => {
        // setCount(count-1);
        // decrement(dispatch)
        dispatch(decrement())

    }    

    const AddByValue = (v) => {
        // setCount(count-1);
        // addByValue(dispatch,v)
        dispatch(addByValue(v))

    }    

    return (
        <div>
            <p> {counter} </p>
            <button onClick={incrementValue}>
                Increment
            </button>
            <button onClick={decrementValue}>
                Decremnts
            </button>

            <button onClick={() => AddByValue(7)}>
                ADd By 7
            </button>    

        </div>
    )
}