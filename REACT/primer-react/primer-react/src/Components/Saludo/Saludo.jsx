export const SaludoComponente=( {horaActual} )=> {
    
  
  
    return (
      <h1>{horaActual >= 6 && horaActual <= 12
      ? "Buenos días"
      : horaActual >= 13 && horaActual <= 19
      ? "Buenas tardes"
      : "Buenas noches"}
</h1>
    );
  }