import React, { useEffect, useState } from 'react'
import style from "./register.module.css"
import {social_media_icons} from '../../assets/assets'
import { signInWithPopup } from 'firebase/auth';
import { auth ,provider} from '../../firebase/Firebase'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';

const Register = () => {
    let navigate = useNavigate()
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");


    //FUNCTION DEFINE HERE 

    useEffect(()=>{
        let user = localStorage.getItem("name")
        if(!user){
          navigate('/register')
        }else{
          navigate('/')
        }
      },[])


    let CreateUserWithGoogle = async () => {
        try {
            let result = await signInWithPopup(auth,provider);
            let user = result.user;
            localStorage.setItem("name",user.displayName)
            if(user){
                navigate('/')
            }
        } catch (error) {
            console.error(error)
        }
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
