import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import { Galeria, Home } from "../pages";
import { Detalle } from "../pages/Detalle/Detalle";


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
        path: "/galeria",
        element: <Galeria/>,
      },
      {
        path: "/personaje/:id",
        element: <Detalle/>,
      }
    ],
  },
]);
