import React, { useContext } from 'react'
import {data,data1} from './App'
export default function CompC() {
    const Name= useContext(data);
    const Gender=useContext(data1);
  return (
    <div>
      <h1>My Name is {Name}  and my gender is{Gender}</h1>
    </div>
  )
}
