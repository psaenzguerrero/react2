import React from 'react'
import { useState } from 'react'
const Buscador = ({dameEscrito}) => {
    const [escrito, setEscrito] = useState("");
    const filtar = dameEscrito.filter(
        post =>{
            return(
                post.title.toLowerCase().includes(escrito.toLocaleLowerCase())
            );
        }
    )
    const cambio= e =>{
        setEscrito(e.target.value);
    }
    function buscar() {
        return(
            <buscar filtrar={filtar}/>
        );
    }
//   return (
//     <>
//         <div>
//             <input type="text" value={escrito} onChange={()=>dameEscrito(escrito)}/>
//         </div>
//     </>
//   )
}

export default Buscador