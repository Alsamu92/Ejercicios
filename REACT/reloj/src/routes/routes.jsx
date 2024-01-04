import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { CuentaAtras, Home } from "../pages";
import PrimerReloj from "../pages/PrimerReloj/PrimerReloj";
import { Cronometro } from "../pages/Cronometro/Cronometro";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/digital",
        element: <PrimerReloj />,
      },
      {
        path: "/cuenta",
        element: <CuentaAtras />,
      },
      {
        path: "/cronometro",
        element: <Cronometro />,
      }
    ],
  },
]);
