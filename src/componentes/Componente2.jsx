import { useEffect, useState } from "react"

const Componente2 = () => {
    // console.log("Componente inicializado y montado");
    // console.log("Solo quiero ejecutar esto una vez");

    // console.log("Quiero que se muestre este codigo cuando se desmonta");
    // const [estado, setEstado] = useState(true);
    // function cambiarEstado() {
    //     setEstado(!estado);
    // }
    // const [estado, setEstado] = useState(true);
    // useEffect(()=>{
    //     console.log("Componente Montado")
    // }, [estado]);
    useEffect(()=>{
        return (
            console.log("Componente Desmontado")
        )
    });
    function cambiarEstado() {
        setEstado(!estado);
    }
  return (
    <>
        <h1>Componente</h1>
        <button onClick={cambiarEstado}>Camiar estado</button>
    </>
  )
}

export default Componente2