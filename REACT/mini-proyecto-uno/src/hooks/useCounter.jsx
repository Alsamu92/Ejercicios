import React, { useState } from 'react'

export const useCounter = (initialValue=1) => {
    const[counter,setCounter]=useState(initialValue)
    const increment = (value = 1) => setCounter(value + counter);

    const decrement = (value = 1) => setCounter(counter - value);
  return {
    counter,
    increment,
    decrement
  }
}
