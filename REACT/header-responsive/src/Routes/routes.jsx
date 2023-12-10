import { createBrowserRouter } from "react-router-dom";

import { App } from "../App";
import { Home } from "../Pages/Home";
import { Cats } from "../Pages/Cats";

export const router=createBrowserRouter([
 {path:"/",
element:<App/>,
children:[
    {path:"/",
element:<Home/>},
    {path:"/cats",
element:<Cats/>}
]}
])