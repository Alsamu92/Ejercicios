

import { Outlet } from 'react-router-dom'
import './App.css'
import { Footer, Main,Header } from './components'

const App=()=> {

  return (
    <>
 <Header/>
 <Main>
  <Outlet/>
 </Main>
 <Footer/>
    </>
  )
}

export default App

