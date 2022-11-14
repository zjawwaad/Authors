import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


// set state for list of heros , use State

// import all heros  useEffect
const AllAuthors = () => {
    const [allAuthors, setAllAuthors] = useState([]) 
    const[ deleteClicked, setDeleteClicked] = useState(false)
    
    
    useEffect (() =>{ 
        axios.get('http://localhost:8001/api/authors')
        .then((response) => {
            console.log(response.data.results)
            setAllAuthors(response.data.results)
        })
        .catch ((err) => {console.log("This is your catch error: ", err)})
    },[allAuthors])


    const deleteAuthor = (e, id) => {
        console.log("Delete this author", id)
        axios.delete(`http://localhost:8001/api/author/delete/${id}`)
        .then((response) => {
            console.log("Delete is successful", response)
            setDeleteClicked(deleteClicked)
        })
        .catch(err => console.log(err))
    }


    return (
        <>
            <div>
                <h1>Fav authors</h1>
                <h3><Link to='/author/add'>Create author</Link></h3>
            </div>

            <div className= 'container'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allAuthors.map((author, i) => {
                            return (
                                <tr key={i}>
                                    <td><Link to={`/author/${author._id}`} className="btn btn-outline-dark">{author.name}</Link></td>
                                    <td><Link to= {`/author/edit/${author._id}`} className='btn btn warning'>Edit</Link>  |  <button className='btn btn-danger' onClick={(e) => {deleteAuthor(e, author._id)}}>Delete</button> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </div>
        </>
    )
}

export default AllAuthors