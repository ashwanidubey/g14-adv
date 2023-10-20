import React from 'react'
import {  useSelector } from 'react-redux'
export default function Showdata() {
    const data = useSelector((state)=>state)
  return (<>
    <div>PEN:{data.pen}</div>
    <div>BOOK:{data.book}</div>
    </>
  )
}
