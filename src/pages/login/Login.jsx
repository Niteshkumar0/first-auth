import React from 'react'
import style from './login.module.css'
const Login = () => {
  return (
    <div className={style.container}>
       <div className={style.formContainer}>
            <div className={style.emailContainer}>
                <input type="email" placeholder="Email" required="" id='email'/>
                <label for="email" >Email</label>
            </div>
            <div className={style.passwordContainer}>
                <input  type="password" placeholder="password" id='password'/>
                <label for="Password" >Password</label>
            </div>
            <div className={style.buttonContainer}>
                <button>Login</button>
            </div>

       </div>
    </div>
  )
}

export default Login
