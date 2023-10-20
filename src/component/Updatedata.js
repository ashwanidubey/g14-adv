import React from 'react'
import { useDispatch } from 'react-redux'
import { DecrementBook, DecrementPen, IncrementBook, IncrementPen } from '../State/action';

export default function Updatedata() {
    const dispatch=useDispatch();
    const incrementPen=()=>{
        dispatch(IncrementPen(5))
    }
    const decrementPen=()=>{
        dispatch(DecrementPen(10)) 
    }
    const incrementBook=()=>{
         dispatch(IncrementBook(5))
    }
    const decrementBook=()=>{
        dispatch(DecrementBook(6))
    }
  return (
    <div>

        <button onClick={incrementPen}>PEN +</button>
        <button onClick={decrementPen} >PEN -</button>
        <button onClick={incrementBook} >Book +</button>
        <button  onClick={decrementBook}>Book -</button>
    </div>
  )
}
