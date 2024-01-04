// import React, { useState } from 'react'

// export const usePaginacion = (num) => {
//   const [currentPage,setCurrentPage]=useState(1)
//   const[items,setItems]=useState([])
//   const itemsPage=num||5
// const currentItems=items.slice(((currentPage-1)*itemsPage),(currentPage*itemsPage))
// const totalPages=Math.ceil(items.length/itemsPage)
// const handlePage=(i)=>{
//     setCurrentPage(i)
// }

//     const botones=[]
//     for(let i=1;i<=totalPages;i++){
//         botones.push(<button key={i}onClick={()=>handlePage(i)}>{i}</button>)
//     }
  
  
//     return { botones, setItems, currentItems,setCurrentPage }
  
// }

//!Paginacion mejorada...
import React, { useState } from 'react';

// Custom hook para gestionar la paginación
export const usePaginacion = (num) => {
  // Estado para almacenar la página actual
  const [currentPage, setCurrentPage] = useState(1);

  // Estado para almacenar los elementos a paginar
  const [items, setItems] = useState([]);

  // Número de elementos por página (por defecto 5)
  const itemsPerPage = num || 5;

  // Función para obtener los elementos actuales de la página
  const currentItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Cálculo del número total de páginas
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Función para cambiar la página actual
  const handlePage = (i) => {
    setCurrentPage(i);
  };

  // Función para calcular el rango de botones a mostrar
  const calculateButtonRange = () => {
    const totalButtonsToShow = 5;

    // Si hay menos de 5 páginas, mostrar todos los botones disponibles
    if (totalPages <= totalButtonsToShow) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Mostrar 5 botones centrados alrededor de la página actual
    const halfTotalButtons = Math.floor(totalButtonsToShow / 2);
    let start = Math.max(1, currentPage - halfTotalButtons);
    let end = start + totalButtonsToShow - 1;

    // Ajustar el rango si se llega al final de las páginas disponibles
    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - totalButtonsToShow + 1);
    }

    return Array.from({ length: totalButtonsToShow }, (_, i) => start + i);
  };

  // Generar los botones de paginación
  const botones = calculateButtonRange().map((i) => (
    <button key={i} onClick={() => handlePage(i)} >
      {i}
    </button>
  ));

  // Retornar los elementos necesarios para gestionar la paginación
  return { botones, setItems, currentItems, setCurrentPage };
};