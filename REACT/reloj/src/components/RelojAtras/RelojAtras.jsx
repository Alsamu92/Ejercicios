import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


export const RelojAtras = () => {
    const [time, setTime] = useState("");
    useEffect(() => {
      //Setear la fecha objetivo
      let countDownDate = new Date("August 28, 2024 13:21:00").getTime();
      //El intervado de cada cuanto se actualiza
      let x = setInterval(() => {
  //guardar en una variable la fecha de ahora mismo
        let now = new Date().getTime();
  //restar la fecha de hoy a la fecha objetivo para saber cuanto falta
        let distance = countDownDate - now;
        
  //para saber lo dias la distancia(en milisegundos dividida entre esto)
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //mostrar la cuenta 
        setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
  //si llega a cero cambiar la cuenta por un texto
        if (distance < 0) {
          clearInterval(x);
          setTime("Cuenta finalizada");
        }
      }, 1000);
    }, []);
    return (
      <div className="countdown">
        <h2>{time}</h2>
      </div>
    );
  };