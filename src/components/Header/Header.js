import React from 'react'
import { useSelector } from 'react-redux'
import './Header.css'

export default function Header(props) {

    const {name} = useSelector(state => state.user.userData);
  return (
    <div className='header'>
         <h1> AnaDev</h1>   
         <p> {name}</p>
         {/* <p> Hello {props.isChanged && props.name} </p>    */}
    </div>
  )
}
