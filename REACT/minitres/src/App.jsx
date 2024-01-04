import { useEffect, useRef, useState } from 'react'

import './App.css'

 const App=()=> {
const inputRef=useRef(null)
const[value,setValue]=useState("")
useEffect(()=>{
  value=="correcto"?(inputRef.current.style.background="green"):(inputRef.current.style.background="red")
},[value])
  return (
    <>
<input ref={inputRef} onChange={(e)=>{setValue(e.target.value)}}></input>
{value=="correcto"?<p>Correcto</p>:<p>Inorrecto</p>}
    </>
  )
}

export default App
