import React, { useEffect, useState } from "react";
import {useParams} from "react-router"
import axios from "axios";




const Display = () => {
    const[author, setAuthor] = useState([])
    const {id} = useParams()


    useEffect(() => {
        axios.get(`http://localhost:8001/api/author/${id}`)
        .then((response) => {
            console.log(response.data.results)
            setAuthor(response.data.results)
        })
    },[id])



  return (
    <>
    <div>Here is our Author</div>
    <div className="card">
        <h1>{author.name}</h1>
    </div>
    </>
  )
}

export default Display