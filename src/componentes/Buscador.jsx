import React from 'react'

const Buscador = ({setFiltro}) => {
    // function cambiar(e) {
    //     setFiltro(e.target.value)
    // }
  return (
    <>
       <div>
            <input type="search" onChange={(e)=>(setFiltro(e.target.value))} className='form-control' placeholder='filtrar por titulo'/>
       </div>
    </>
  )
}

export default Buscador