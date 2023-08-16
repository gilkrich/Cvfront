import React from 'react'
import axios from 'axios';
import './signup.css'
import { Outlet, Link, useParams,useNavigate } from 'react-router-dom'



const Signup = ({usersarray,refresh,setrefresh}) => {
  const navigate = useNavigate();

    async function sumbit(e) {          
        e.preventDefault()
        const username = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        const verify = e.target[3].value
        if (password.length < 6 || password.length > 12) {
          alert("password must be at least 6 signs and less then 12 signs")
        }
        else if (password.length >= 6 && password.length <= 12 && password == verify) {
          const users = await axios.get("http://localhost:3007/users/isthere", { email: email })
          const usersdata = usersarray.findIndex(obj => obj.email == email)
          if (usersdata != -1) {
            alert(" email is already taken")
          } else {
            if (email.includes("@") && email.includes(".com")) {
              const halfemail = email.split("@")[1].split(".")[0];
              if ((halfemail == "gmail" || halfemail == "walla")) {
                const newUser = await axios.post("http://localhost:3007/users/register", { username: username, email: email, password: password })
                console.log(newUser);
                navigate('/')
              }
              else {
                alert("email isnt valid")
              }
            }
            else {
              alert("email isnt valid")
            }
          }
        }
        else {
          alert("password got to be the same")
        }
        setrefresh(!refresh)
      }
    

  return (
    <div className='sign-container'>
       <form onSubmit={(e) => sumbit(e)} className='form-sign glass-effect'>   
       <h1 style={{color:'white'}}>SIGN-UP</h1>
          <input type="text"  placeholder='username' className='input .sign-up-input'/>
          <input type="text"  placeholder='email' className='input .sign-up-input'/>
          <input type="text"  placeholder='password' className='input .sign-up-input'/>
          <input type="text"  placeholder='verify password' className='input .sign-up-input'/>
        <button type='submit' className='sign-button glass-effect'>submit</button>
        <h4 style={{color:'white'}}>
          already a member?<Link to='/' style={{color:'black'}}>Login here</Link>
        </h4>
        
      </form >
    </div>
  )
}

export default Signup
