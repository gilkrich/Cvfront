import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react'
import { Outlet, Link, useParams, } from 'react-router-dom'
import { Context } from './Usercontext';
import './templates.css'
import pin from './images/pin.png'
import age from './images/age.png'
import mail from './images/mail.png'
import telephone from './images/telephone.png'
import firsttemp from './images/firsttemp.png'
import sectemp from './images/sectemp.png'
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";
import Firsttemplate from './Firsttemplate';
import Secondtemp from './Secondtemp';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Upload from './Upload';

const Templates = ({ usersarray }) => {

    const [first, setfirst] = useState(false)
    const [sec, setsec] = useState(false)
    const [openlogin, setopenlogin] = useState(false)
    const { loggeduser } = useContext(Context)
    const { loggeduserinfo } = useContext(Context)
    const { refresh } = useContext(Context)
    const { setrefresh } = useContext(Context)
    const { current } = useContext(Context)
    const { setcurrent } = useContext(Context)

    function notlogged() {
        if (Object.keys(loggeduser).length == 0) {
            setopenlogin(true)
        }
    }

    return (

        <div className='main-container1'>

            <h2>Your cv's</h2>
            <div className='choose-cv-sec'>
                {loggeduserinfo.map((item, index) => (
                    <button onClick={() => setcurrent(index)}>{loggeduserinfo[index].expirence1.proffsion}</button>
                ))}
            </div>


            <div>
                <h1>Choose a template</h1>
            </div>
            <hr />
            <div className='templates-cont'>
                <img src={firsttemp} alt="" width='350px' onClick={() => { if (Object.keys(loggeduser).length > 0) { setfirst(!first), setsec(false) } notlogged() }} />
                <img src={sectemp} alt="" width='350px' onClick={() => { if (Object.keys(loggeduser).length > 0) { setsec(!sec), setfirst(false) } notlogged() }} />
            </div>
            <div >
                {first && <Firsttemplate></Firsttemplate>}
                {sec && <Secondtemp></Secondtemp>}
            </div>


            {openlogin && <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                height: 450,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                textAlign: 'center',
                p: 4,
            }}>
                <h1>
                    You have to be logged in to create a template
                </h1>
                <Link to='/'>
                    <button className='need-login'>login</button>
                </Link>
                <button className='back-button' onClick={() => setopenlogin(false)}> {'<-- back'}</button>
            </Box>}


            <div>
                <h1></h1>
            </div>
        </div>

    )
}

export default Templates

