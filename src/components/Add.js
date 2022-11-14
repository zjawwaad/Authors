import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Add = () => {

    const navigate = useNavigate()

    const [errors, setErrors] = useState([]); 

    const [formInfo, setFormInfo] = useState({
        name:""
    })

    const onChangeHandler =(e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8001/api/author/new", formInfo)
        .then((response) => {
            console.log(response)
                setFormInfo(formInfo)
                navigate("/")
        })

        .catch(err=>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })}           
            // console.log("This is a catch error", err)

    return (
    <div>
        <h1>Add Author</h1>
        <div className="container">
                {errors.map((err, index) => <p key={index}>{err}</p>)}
            <form onSubmit={submitHandler}>
            <div className="mb-3 d-flex">
                <label htmlFor='name' className='form-label'>Name:</label>
                <input type="text" className='form-control' name='name' onChange={onChangeHandler} />
            </div>
            <div className="mb-3 d-flex">
                <button type='submit' className='btn btn-success'>Submit</button>
            </div>
            </form>
        </div>
    </div>
)
    }

export default Add