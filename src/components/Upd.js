import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Upd.css'


function Upd() {
    const [id, setID] = useState('')
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')

    const moveto = useNavigate()

    useEffect(() => {
        setID(localStorage.getItem("id"))
        setName(localStorage.getItem("Name"))
        setEmail(localStorage.getItem("Email"))
    }, [])




    function handleSubmit(e) {
        e.preventDefault()
        axios.put(`https://66b21c7d1ca8ad33d4f69b4d.mockapi.io/employee-list/${id}`,{
            Name: Name,
            Email: Email
        })
        .then(() => {
            moveto("/read")
        })
    }





  return (
    <div className='wholepage'>
      <div className='sett'>
        <h1>Update Form</h1>
        <Link to="/read">
        <button className='back-btn'>Back</button>
        </Link>
      </div>
      <div>
        <form>
            <div className='nam'>
                <label className='te'>Name</label>
                <input type="text" className='inp' value={Name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='ema'>
                <label className='te'>Email</label>
                <input type="email" className='inp' value={Email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button className='fin-btn' onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Upd
