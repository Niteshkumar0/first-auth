import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <button><Link to='/register'>Register</Link></button>
      <button><Link to="https://seccap.dgcs.gos.pk/#/">SEECAP</Link></button>
    </div>
  )
}

export default Home
