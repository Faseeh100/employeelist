import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Create.css'
import axios from 'axios'


function Create() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://66b21c7d1ca8ad33d4f69b4d.mockapi.io/employee-list',{
            Name: name,
            Email: email
    })
    .then(() =>{
        navigate('/read')
    })
}
    
  return (
    <div className='whole'>
      
      <div className='set'>
        <h1>Employee List</h1>
        <Link to="/read">
        <button className='check-btn'>Check</button>
        </Link>
      </div>
      <div className='top'>
        <form>
            <div className='form'>
                <label className='tag'>Name</label>
                <input type="text"
                 onChange={(e) => setName(e.target.value)} 
                 className='i'
                 value={name} />
            </div>
            <div className='email'>
                <label className='tag'>Email</label>
                <input type="email" 
                onChange={(e) => setEmail(e.target.value)} 
                className='i' 
                value={email} />
            </div>
            <button className='sub-btn' onClick={handleSubmit}>Submit</button>
        </form>
      </div>



    </div>
  )
}

export default Create
