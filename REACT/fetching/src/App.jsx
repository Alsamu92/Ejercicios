import "./App.css";
import { Boton, Cita, Loading } from "./components";
import { useCounter } from "./hooks/useCounter";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { counter, increment, decrement, reset } = useCounter();
  console.log(increment)
  const { data, hasError, isLoading } = useFetch(
   
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  //**el id es el numero de citas, no el unitario, por lo que queremos que solo refleje la ultima */
  const { quote, author } = !!data && data[0];
  if (hasError) {
    return <div>{hasError.toString()}</div>;
  } else {
    return isLoading ? (
      <Loading />
    ) : (
      //**Si no esta cargando muestra los componentes */
      <>
        <Cita quote={quote} author={author} />
        <Boton event={() => decrement()}>
          Atras
        </Boton>
       
        <Boton event={() => reset()}>
          Inicio
        </Boton>
        <Boton event={() => increment()}>
          Siguiente
        </Boton>
        
      </>
    );
  }
}

export default App;
