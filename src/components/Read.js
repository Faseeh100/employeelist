import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Read.css'


function Read() {
  const [data, setData] = useState([])

  const getData = () => {
     axios.get('https://66b21c7d1ca8ad33d4f69b4d.mockapi.io/employee-list')
     .then((res) => {
      setData(res.data)
     })
  }

  function setToLocalStorage(id, Name, Email) {
    localStorage.setItem("id", id)
    localStorage.setItem("Name", Name)
    localStorage.setItem("Email", Email)
  }

  function handleDelete(id) {
   axios.delete(`https://66b21c7d1ca8ad33d4f69b4d.mockapi.io/employee-list/${id}`)
   .then(() => {
    getData()
   })
  }

  useEffect(() => {
    getData()
  }, [])




  return (
    <div className='wh'>
      
      <div>
        <h1>List of Employees</h1>
      </div>
      <table className='tab'>
        <thead>
          <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th></th>
          <th></th>
          </tr>
        </thead>
        {
          data.map((ed) => {
            return (
              <>
            <tbody className='top-row'>
              <tr>
                <th>{ed.id}</th>
                <td>{ed.Name}</td>
                <td>{ed.Email}</td>
                <td>
                  <Link to="/update">
                  <button className='e-btn' onClick={() => setToLocalStorage(ed.id, ed.Name, ed.Email)}>Edit</button>
                  </Link>
                </td>
                <td>
                  <button className='d-btn' onClick={() => handleDelete(ed.id)}>Delete</button>
                </td>
              </tr>
            </tbody>
            </>
            )
          })
        }
      </table>
      <Link to="/">
      <button className='add-btn'>Add an Employee</button>
      </Link>
    </div>
  )
}

export default Read
