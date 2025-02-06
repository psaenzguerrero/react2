import { useState } from 'react'
import Card from './componentes/Card'
import Hijo from './componentes/Hijo'
import Componente2 from './componentes/Componente2'
import Post from './componentes/Post'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Soporte from './pages/Soporte'
import Error from './pages/Error'
import Nav from './componentes/Nav'

function App() {
  // const users= 
  // {
  //   nombre:"redu",
  //   edad:50
  // }
  // const [estado, setEstado] = useState(false);
  
  // function cambiar() {
  //     setEstado(!estado);
  // }
  // const [usuario, setUsuario] = useState("");
  // function login(usuario){
  //   setUsuario(usuario);
  // }
  // const [estado, setEstado] = useState(true);
  // function ocultarMostrar() {
  //     setEstado(!estado);
  // }
  return (
    <>
      {/* <Card estado={estado}/> */}
      {/* <button onClick={cambiar}>{ estado ? "Desactivar" : "Activar" }</button> */}
      
      
      {/* <h2>Hola usuario: {usuario}</h2>
      <Hijo  damelogin={login}/> */}

      {/* <button onClick={ocultarMostrar}>{estado? "Ocultar" : "Mostrar"}</button>
      {estado && <Componente2/>} */}
     
     {/* <Post/>  */}
     <Nav/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contacto' element={<Contact/>}/>
        <Route path='/soporte' element={<Soporte/>}/>
        <Route path='*' element={<Error/>}/>
     </Routes>
    </>
  )
}

export default App
