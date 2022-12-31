import React, { useEffect, useState } from 'react'
import './Update.css'
import { useParams } from 'react-router-dom'

const Update = () => {
  const { id } = useParams()
  const [user, setUser] = useState({})
  // const [updated, setUpdated] = useState({})
  // console.log(updated)

  useEffect(() => {
    fetch(`http://localhost:5000/user/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])

  const handleUpdateInput = e => {
    // e.preventDefault()
    const name = e.target.name.value
    const address = e.target.address.value
    const number = e.target.number.value
    const newUpdate = { name, address, number }

    const url =  `http://localhost:5000/user/${id}`
    fetch(url, {
      method:  'PUT',
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newUpdate)
    })
    .then(res => res.json())
    .then(data => console.log(data))


    e.target.reset()
  }
  return (
    <div>
      <div className="details">
        <h3>Update your data</h3>
        <div>
          <h6>
            Name: {user.name} <br /> Address: {user.address} <br /> Number: {user.number}
          </h6>
        </div>
        <div>
          <form onSubmit={handleUpdateInput} action="">
            <input type="text" name="name" id="" placeholder='name' required />
            <input type="text" name="address" id="" placeholder='address' required />
            <input type="number" name="number" id="" placeholder='number' required />
            <input className='update-Button' type="submit" value="Update" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Update 