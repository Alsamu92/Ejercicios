import { createBrowserRouter } from "react-router-dom";

import { App } from "../App";
import { Home } from "../Pages/Home";
import { Cats } from "../Pages/Cats";
import { Nueva } from "../Pages/Nueva";
import { Carrusel } from "../Pages/Carrusel";

export const router=createBrowserRouter([
 {path:"/",
element:<App/>,
children:[
    {path:"/",
element:<Home/>},
    {path:"/cats",
element:<Cats/>},
{path:"/nueva",
element:<Nueva/>},
{path:"/carrusel",
element:<Carrusel/>}
]}
])