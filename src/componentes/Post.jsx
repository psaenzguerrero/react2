import React, { useEffect, useState } from 'react'

const Post = () => {
    const [Posts, setPosts] = useState([])
    useEffect(()=>{
        console.log("llamo a la api");
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(respuesta => respuesta.json())
        .then(datos=>setPosts(datos))
    },[])
  return (
    <>
        <h1>POSTS</h1>
        

    </>
  )
}

export default Post