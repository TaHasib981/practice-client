import React, { useState } from 'react'
import { resolvePath } from 'react-router-dom'
import './Event.css'

const Event = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')

  const handleName = e => {
    const collectName = e.target.value
    setName(collectName)
  }
  const handleAddress = e => {
    const collectAddress = e.target.value
    setAddress(collectAddress)
  }
  const handleNumber = e => {
    const collectionNumber = e.target.value
    setNumber(collectionNumber)
  }
  const handleSubmit = e =>{
    e.preventDefault()
    const user = {name, address, number}
    fetch('http://localhost:5000/user',{
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        e.target.reset()
      }
    })
  }
// console.log(userDetails.name)
  return (
    <div>
      <div className="eventContainer">
        <h1>Add your Next-Event</h1>
        <form onSubmit={handleSubmit} className='eventForm' action="">
          <input onChange={handleName} className='inputName' type="text" placeholder='name' required />
          <input onChange={handleAddress} className='inputAddress' type="text" placeholder='address' required  />
          <input onChange={handleNumber} className='inputNumber' type="number" placeholder='phone' required />
          <input className='inputSubmit' type="submit" />
        </form>
      </div>

    </div>
  )
}

export default Event
