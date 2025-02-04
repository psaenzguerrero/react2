import { useState } from 'react'
const Hijo = ({damelogin}) => {
    const [usuario, setUsuario] = useState("Andres");
  return (
    <>

        <div>
            <button onClick={()=>damelogin(usuario)}>login</button>
        </div>

    </>
  )
}

export default Hijo