import React, { useState } from 'react'

export const usePaginacion = (num) => {
  const [currentPage,setCurrentPage]=useState(1)
  const[items,setItems]=useState([])
  const itemsPage=num||5
const currentItems=items.slice(((currentPage-1)*itemsPage),(currentPage*itemsPage))
const totalPages=Math.ceil(items.length/itemsPage)
const handlePage=(i)=>{
    setCurrentPage(i)
}

    const botones=[]
    for(let i=1;i<=totalPages;i++){
        botones.push(<button key={i}onClick={()=>handlePage(i)}>{i}</button>)
    }
  
  
    return { botones, setItems, currentItems,setCurrentPage }
  
}
