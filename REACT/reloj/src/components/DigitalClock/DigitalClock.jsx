import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import"./DigitalClock.css"
export const DigitalClock = () => {
    const[clockState,SetClockState]=useState()
    useEffect(()=>{
        setInterval(()=>{
            const date=new Date()
            SetClockState(date.toLocaleTimeString())
        },1000)
    })
  return (
    <div>
        <h2>{clockState}</h2>
    </div>
  )
}
