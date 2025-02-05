import { useState } from 'react'
import Card from './componentes/Card'
import Hijo from './componentes/Hijo'
import Componente2 from './componentes/Componente2'
import Post from './componentes/Post'

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
     
     <Post/> 
    </>
  )
}

export default App
