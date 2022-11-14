import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Edit = () => {
    const {id} = useParams();
    const navigate = useNavigate();


    const [formInfo, setFormInfo] = useState({
        name:""
    })


    useEffect (() =>{ 
        axios.get(`http://localhost:8001/api/author/${id}`)
        .then((response) => {
            console.log(response.data.results)
            setFormInfo(response.data.results)
        })
        .catch ((err) => {console.log("This is your catch error: ", err)})
    },[id])



    const onChangeHandler =(e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8001/api/author/update/${id}`, formInfo)
        .then((response) => {
            console.log("Here are the results: ", response)
            navigate("/")
        })
        .catch(err => console.log("Here is hthe catch error: ", err))
    }

    return (
    <div>
    <div className="container">
        <form onSubmit={submitHandler}>
            <div className="mb-3 d-flex">
                <label htmlFor='name' className='form-label'>Name:</label>
                <input type="text" className='form-control' name='name' value={formInfo.name} onChange={onChangeHandler} />
            </div>
            <div className="mb-3 d-flex">
                <button type='submit' className='btn btn-success'>Submit</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Edit