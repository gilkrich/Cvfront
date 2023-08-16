import React from 'react'
import { Outlet, Link, useParams, } from 'react-router-dom'
import './layout.css'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react'
import { Context } from './Usercontext';
import facebook from './images/facebook.png'
import instagram from './images/instagram.png'
import linkdin from './images/linkdin.png'
import github from './images/github.png'
import twitter from './images/twitter.png'

const Layout = ({ usersarray }) => {
  const { loggeduser, setlogged } = useContext(Context)
  const { loggeduserinfo } = useContext(Context)
  const { refresh } = useContext(Context)
  const { setrefresh } = useContext(Context)
  const { current } = useContext(Context)


  function signout() {
    localStorage.removeItem('token')
    setlogged({})
  }




  return (
    <div>
      <nav className='nav-bar'>

        <div className='logo-cont'>
          <h1 className='logo-one'>CV</h1>
          <h1 className='logo-two'>Connect</h1>
        </div>

        <div className='link-side-cont'>

          <div className='pages-links-cont'>
            <Link to='makecv' className='nav-link' style={{ fontSize: 'x-large' }}>{Object.keys(loggeduserinfo).length > 0 ? 'my cv' : 'make cv'}</Link>
            <Link to='template' className='nav-link' style={{ fontSize: 'x-large' }}>template</Link>
            <Link className='nav-link' to='home' style={{ fontSize: 'x-large' }}>Homepage</Link>
          </div>

          {Object.keys(loggeduser).length > 0 && <div className='sign-out-div'>
            <h4>hello {loggeduser.username}</h4>
            <button className='sign-out-button' onClick={() => signout()}>sign-out</button>
            {/* {Object.keys(loggeduserinfo).length > 0 && <img src={loggeduserinfo[current].img} alt="" className='profile-img' />}
            {Object.keys(loggeduserinfo).length < 1 && <img src='https://icon-library.com/images/blank-person-icon/blank-person-icon-7.jpg' alt="" className='profile-img' />} */}
          </div>}

          {!Object.keys(loggeduser).length > 0 && <div className='login-div'>

            <Link to='/' className='nav-link' >
              <button className='login-button'>
                Login
              </button>
            </Link>


            <Link to='sign' className='nav-link' style={{ color: 'black' }} >
              <button className='sign-up-button'>
                Register
              </button>
            </Link>
          </div>}

        </div>
      </nav>
      <Outlet />

      <footer className='main-footer'>
        <div className='footer'>
          <div className='links-div'>
            <h4 className='footer-main-link'>About us</h4>
            <p className='footer-link'>Our buissnes department</p>
          </div>
          <div className='links-div'>
            <h4 className='footer-main-link'>Contact us</h4>
            <p className='footer-link'>our physical centers</p>
          </div>
          <div className='links-div'>
            <h4 className='footer-main-link'>Payment & privacy policy</h4>
            <p className='footer-link'>Cancelling a transaction</p>
          </div>
          <div className='links-div'>
            <h4 className='footer-main-link'>Terms of use</h4>
            <p className='footer-link'>accessibility</p>
          </div>
        </div>
        <div className='social-cont'>
          <img src={facebook} alt="" className='socail-iamges-three image-hover' />
          <img src={twitter} alt="" className='socail-iamges-three image-hover' />
          <img src={github} alt="" className='socail-iamges-one image-hover' />
          <img src={linkdin} alt="" className='socail-iamges-three image-hover' />
        </div>
      </footer>


    </div>
  )
}

export default Layout
