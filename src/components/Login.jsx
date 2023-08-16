import React from 'react'
import axios from 'axios';
import './login.css'
import { useContext } from 'react'
import { Context } from './Usercontext';
import { Outlet, Link, useParams, useNavigate } from 'react-router-dom'




const Login = ({ usersarray }) => {
  const navigate = useNavigate();
  const { refresh } = useContext(Context)
  const { setrefresh } = useContext(Context)

  async function loginform(e) {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value
    try{
      const response = await axios.post("http://localhost:3007/users/login", { email: email, password: password })
      const logg = response.data
      localStorage.setItem('token', logg.token)
      setrefresh(!refresh)
      navigate('home')
    }
    catch (err){
  alert(err.response.data.error);
    }
  }




  return (
    <div className='login-container'>
      <form onSubmit={(e) => loginform(e)} className='form glass-effect'>
        <h1 style={{}}>LOGIN</h1>
        <input type="text" placeholder='email' className='input .login-input' />
        <input type="text" placeholder='password' className='input .login-input' />
        <button type='submit' className='login-button-real glass-effect'>login</button>
        <h4 style={{}}>
          Dont have an account?<Link to='sign' style={{color:'black'}}>Sign up here</Link>
        </h4>
      </form >
    </div>
  )
}

export default Login
