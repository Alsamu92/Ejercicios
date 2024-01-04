
import { Outlet } from 'react-router-dom'
import './App.css'
import { Footer, Header, Main, Title } from './components'

function App() {


  return (
    <>
    <Header>
    <Title text="Mi Título" />
    </Header>
   
    <Main>
    <Outlet/>
    </Main>
    <Footer/>
    
    </>
  )
}

export default App
