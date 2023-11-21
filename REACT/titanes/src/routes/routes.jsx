import { createBrowserRouter} from "react-router-dom";
import { App } from "../App";

import { Mapa } from "../pages/Mapa/Mapa";
import { MapaCiudad } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Mapa />,
      },
      {
        path: "/ciudad",
        element: <MapaCiudad />,
      },
      
    ],
  },
]);
