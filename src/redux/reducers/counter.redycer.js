import { BYVALUE, DECREMENT, INCREMENT } from "../actions/types";

const counterReducer = (state = {counter : 0}, action) => {
        switch(action.type){
                case  INCREMENT : 
                        return {...state,counter : state.counter +1 }
                case DECREMENT : 
                        return {...state , counter : state.counter - 1};
                case BYVALUE : 
                        return {...state , counter : state.counter + action.value};                        
                default :
                        return state;
        }
}

export default counterReducer;