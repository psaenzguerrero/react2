import { useState } from 'react'
import Card from './componentes/Card'
import Hijo from './componentes/Hijo'

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
  const [usuario, setUsuario] = useState("");
  function login(usuario){
    setUsuario(usuario);
  }
  return (
    <>
      {/* <Card estado={estado}/> */}
      {/* <button onClick={cambiar}>{ estado ? "Desactivar" : "Activar" }</button> */}
      
      
      <h2>Hola usuario: {usuario}</h2>
      <Hijo  damelogin={login}/>


      
      
    </>
  )
}

export default App
