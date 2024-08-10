import React, { useEffect, useState } from 'react'
import style from "./register.module.css"
import {social_media_icons} from '../../assets/assets'
import { auth } from '../../firebase/Firebase'
import { GoogleAuthProvider} from 'firebase/auth'
import { signInWithPopup } from 'firebase/auth'


const Register = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");


    //FUNCTION DEFINE HERE 
    let CreateUserWithGoogle = async () => {
       let provide = await new GoogleAuthProvider();
       signInWithPopup(auth,provide);
       
    }

    return (
    <div className={style.container}>
       <div className={style.formContainer}>

            <div className={style.nameContainer}>
                <input type="input" placeholder="Name" required="" id='name' onChange={(e)=>setName(e.target.value)}/>
                <label for="name" >Name</label>
            </div>
            <div className={style.emailContainer}>
                <input type="email" placeholder="Email" required="" id='email' onChange={(e)=>setEmail(e.target.value)}/>
                <label for="email" >Email</label>
            </div>
            <div className={style.passwordContainer}>
                <input  type="password" placeholder="password" id='password' onChange={(e)=>setPassword(e.target.value)}/>
                <label for="Password" >Password</label>
            </div>
            <div className={style.confirmContainer}>
                <input  type="password" placeholder="confirm password" id='confirmPassword' onChange={(e)=>setConfirmPassword(e.target.value)}/>
                <label for="confirmPassword" >confirm Password</label>
            </div>
            <div className={style.buttonContainer} >
                <button>Register your Account</button>
            </div>
            <img src={social_media_icons.google} width={40} height={40} onClick={CreateUserWithGoogle} className={style.googleIcon}/>
       </div>
    </div>
  )
}

export default Register
