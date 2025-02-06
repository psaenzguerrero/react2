import React, { useEffect, useState } from 'react'
import './Post.css'
import Buscador from './Buscador.jsx'

const Post = () => {
    const [Posts, setPosts] = useState([]);
    const [filtro, setFiltro] = useState("");

    useEffect(()=>{
        console.log("llamo a la api");
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(respuesta => respuesta.json())
        .then(datos=>setPosts(datos))
    },[])
    let entradasFiltradas = Posts.filter(entrada=>
        entrada.title.toLowerCase().includes(filtro.toLowerCase())

    );
 
  return (
    <>
        <div className="container border p-5">
            <div className="row p-4">
                <div>
                    <Buscador setFiltro={setFiltro}/>
                </div>
                {
                    entradasFiltradas.map(post => {
                        return(
                            <div className='col-md-4' key = {post.id}>
                                <div className="card post">
                                    <div className="card-body">
                                        <h5 className="card-title">{post.title}</h5>
                                        <p className="card-text">{post.body}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Post