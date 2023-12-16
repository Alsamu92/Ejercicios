import React, { useEffect } from 'react'
import { usePaginacionFlechas } from '../hooks/usePaginacionFlechas';
import"./Carrusel.css"
import { Slide } from '../Components/Slide';
export const Carrusel = () => {


  const images=  [
      "https://res.cloudinary.com/djfkchzyq/image/upload/v1702552615/jeoriykxj67mgarzpfja.png",
      "https://res.cloudinary.com/djfkchzyq/image/upload/v1702557520/qfwylmwwiw6g76ykjmk8.jpg",
      "https://res.cloudinary.com/djfkchzyq/image/upload/v1702552615/jeoriykxj67mgarzpfja.png",
      "https://res.cloudinary.com/djfkchzyq/image/upload/v1702557520/qfwylmwwiw6g76ykjmk8.jpg",
    ];

  
 




  return (
  <>

<div className='carrusel'>
<Slide/>
</div>
  </>
  
  )
}
