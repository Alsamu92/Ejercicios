import { createBrowserRouter} from "react-router-dom";
import { App } from "../App";

import { Mapa } from "../pages/Mapa/Mapa";
import { CheckCode, Dashboard, Login, MapaCiudad, Titanes } from "../pages";
import { Register } from "../pages/Register/Register";
import { Protected } from "../components/ProtectedRoute/Protected";
import ProtectedCheckChildren from "../components/ProtectedRoute/ProtectedCheckChildren";



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
      ,
      {
        path: "/register",
        element: <Register />,
      },
      ,
      {
        path: "/login",
        element: <Login />,
      },
   
      {
        path: "/dashboard",
        element: (
          <Protected>
            <Dashboard />
          </Protected>
        ),
      },
      {
        path: "/titanes",
        element: (
          
            <Titanes/>
         
        ),
      },

      {
        path: "/verifyCode",
        element: 
        //primero pasa por el componente padre y accede al hijo si cumple
        <ProtectedCheckChildren>
        <CheckCode />
      </ProtectedCheckChildren>
        
      },
    ],
  },
]);
