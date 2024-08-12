import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  let navigate = useNavigate()
  useEffect(()=>{
    let user = localStorage.getItem("name")
    if(!user){
      navigate('/register')
    }else{
      navigate('/')
    }
  },[])
  return (
    <div>
      <h1>Home</h1>
      <button><Link to='/register'>Register</Link></button>
      {/* <button><Link to="https://seccap.dgcs.gos.pk/#/">SEECAP</Link></button> */}
    </div>
  )
}

export default Home
