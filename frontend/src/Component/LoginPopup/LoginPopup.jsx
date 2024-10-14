/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext, useState} from 'react'
// import { useState } from 'react'
import './LoginPopup.css'
import { assets } from "../../assets/assets";
import { StoreContext } from '../../context/StoreContext';
import axios from "axios"

const LoginPopup = ( {setShowLogin}) => {
    const {url,setToken} = useContext(StoreContext)
    // eslint-disable-next-line no-unused-vars
    const [currState,setCurrState] = useState("Login")

    //for backendpart
    const [data,setData] =useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler =(event) =>{
        const name = event.target.name;
        const value = event.target.value;
    setData(data=>({...data,[name]:value}))
}
const onLogin = async (event) =>{
    event.preventDefault()
    //call api
    let newUrl = url;
    if(currState==="Login"){
        newUrl += "/api/user/login"
    }
    else{
        newUrl += "/api/user/register"
    }

    const response =await axios.post(newUrl,data);
    if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
        setShowLogin(false)
    }
    else{
        alert(response.data.message)
    }


}

  return (
      <div className="container">
        
            <form onSubmit={onLogin} className='login-popup-container'>
            <div className="form-box">
            <h1 id="title">{currState}</h1>
            <img  onClick ={()=>setShowLogin(false)} src={assets.cross_icon}  />
            </div>
            <div className='login-popup-inputs'>
                {currState==="Login"?<></>:
                    <input name='name' onChange={onChangeHandler}  value={data.name} type="text" placeholder="Enter Your Name" required/>
            }
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder="Enter Your Email" required/>
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder="Enter Your Password"required/>
            </div>
            <button type='submit'>{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className='login-popup-condition'>
                <input type="checkbox" required/>
                <p> By continuing,i agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Login"?
            <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here </span></p>:
            <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login</span></p>}

            
            </form>
            </div>
        
    
  )
}

export default LoginPopup
