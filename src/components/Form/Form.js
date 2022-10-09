import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Form.css'
import { addUserApi } from '../../redux/api';
export default function Form(props) {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const {errorUser , loading} = useSelector(state => state.user)
    const dispatch = useDispatch();


    const handleEvent = (e) => {
        e.preventDefault();
        // dispatch(addUser({name,email}))
        addUserApi({name,email},dispatch)
    }

  return (
    <form className='form' 
    // onSubmit={props.addUser}
     onSubmit={handleEvent}   
    >
    <div className='form-group'>
        <input type="text" placeholder='ENter Name'
            onChange={(e)=>  setName(e.target.value)}
            // onChange={(e)=>  props.setName(e.target.value)}
        
        />
    </div>
    <div className='form-group'>
        <input type="email" placeholder='ENter Email'
         onChange={(e) => setEmail(e.target.email)}   
        />
    </div>
        {loading ? 'loading...' : <div className='form-group'>
        <input type="submit" placeholder='Add User'
        // onClick={() => props.addUser()}
        
        />
    </div>}

    {errorUser && 'Error'}    
    </form>        
  )
}
