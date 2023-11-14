import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Home, Listado } from './pages/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<BrowserRouter basename="/">
  <Routes>
    <Route path="/" element={<App/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="/listado" element={<Listado/>}/>
    <Route path="/about" element={<About/>}/>


    </Route>
  </Routes>
</BrowserRouter>
  </React.StrictMode>,
)
