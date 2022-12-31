import React, { useEffect, useState } from 'react'
import './Home.css'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const Home = () => {
  const [users, setUsers] = useState([])
  //load data from get api
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])


  //delete data from ui
  const handleDelete = id => {
    const confirmDelete = window.confirm('are your sure to delete this user?')
    if (confirmDelete) {
      fetch(`http://localhost:5000/users/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            const remaining = users.filter(user => user._id !== id)
            setUsers(remaining)
          }
        })
    }
  }
  //
  return (
    <div className='container'>
      <h6>Total users : {users.length} </h6>
      <div className="">
        <div className='row'>
          {
            users.map(user => <div className='singleDiv col-md-4 gy-4 py-3' key={user._id} >
              <h4>Name: {user.name}</h4>
              <h5>Address: {user.address} <br /> Number: {user.number}</h5>
              <div className='buttonDiv'>
                <Link to={`/update/${user._id}`}>
                  <button className='updateButton'><h5>update</h5></button>
                </Link>
                <button onClick={() => handleDelete(user._id)} className='deleteButton '><h5>delete</h5></button>
              </div>
            </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default Home