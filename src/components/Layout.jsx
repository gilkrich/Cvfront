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
import profile from './images/maleprofileicon.png'
import whiteprofile from './images/whiteprofile.png'


const Layout = ({ usersarray }) => {
  const [showarrow,setshowarrow] = useState(false)
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
             <div className='second-nav'>

        <div className='logo-cont'>
          <h1 className='logo-one'>CV</h1>
          <h1 className='logo-two'>Connect</h1>
        </div>

        <div className='link-side-cont'>

          <div className='pages-links-cont'>
            {Object.keys(loggeduser).length > 0 &&<Link to='makecv' className='nav-link' style={{ fontSize: 'large' }}>{Object.keys(loggeduserinfo).length > 0 ? 'My-cv' : 'Make-cv'}</Link>}
           {Object.keys(loggeduser).length > 0 && <Link to='template' className='nav-link' style={{ fontSize: 'large' }}>Template</Link>}
            <Link className='nav-link' to='home' style={{ fontSize: 'large' }}>Homepage</Link>
          </div>
           
          {Object.keys(loggeduser).length > 0 && <div className='sign-out-div'>
            {/* <h4>hello {loggeduser.username}</h4> */}
            <div className='profile-icon-cont'>
            <img src={whiteprofile} alt=""  width={'37px'} onClick={()=>{setshowarrow(!showarrow)}}/> 
            {showarrow&&<button className='sign-out-button' onClick={() => signout()}>sign-out</button>}
            </div>

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
