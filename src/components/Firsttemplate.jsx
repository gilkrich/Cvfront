import React from 'react'
import pin from './images/pin.png'
import age from './images/age.png'
import mail from './images/mail.png'
import telephone from './images/telephone.png'
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";
import './firsttemplate.css'
import { useContext } from 'react'
import { Context } from './Usercontext';
import download from './images/download.png'
import { useState } from 'react'

const Firsttemplate = () => {
    const [isHovered, setIsHovered] = useState(false);
    const { loggeduser } = useContext(Context)
    const { loggeduserinfo } = useContext(Context)
    const { refresh } = useContext(Context)
    const { setrefresh } = useContext(Context)
    const { current } = useContext(Context)
    const { setcurrent } = useContext(Context)

    const convertHtmlToPdf = () => {
        const input = document.getElementById("first-template")
        const pxWidth = 595
        const pxHeight = 842

        html2canvas(input, {
            width: pxWidth,
            height: pxHeight,
            scale: 1.8
        })
            .then((canvas) => {
                const imgData = canvas.toDataURL("image/png");
                const pdf = new jsPDF('portrait', 'px', [pxWidth, pxHeight]);
                pdf.addImage(imgData, 'PNG', 0, 0);
                pdf.save("my-resume.pdf")
            })
    }

    return (
        <div>

            {loggeduserinfo.length > 0 && <div id='first-template'>
                <div className='first-section'>
                    <h1 className='name'>{loggeduserinfo[current]?.fullname}</h1>
                    <div className='profile-image-cont'>
                        <img src={loggeduserinfo[current]?.img} alt="" className='profile-image' />
                    </div>
                </div>
                <div className='first-break'>
                    <hr style={{ margin: '0', width: '90%', textAlign: 'center' }} />
                </div>
                <div className='second-section'>
                    <div className='first-row'>

                        <div className='first-main-sec'>
                            <div className='contact-div-main'>
                                <div className='center-div' style={{ textAlign: 'start', wordWrap: 'break-word' }}>
                                    <h6>OBJECTIVE</h6>
                                    <p className='big-text'>{loggeduserinfo[current]?.objective}</p>
                                </div>
                            </div>
                        </div>

                        <div className='first-sec'>
                            <div className='contact-div-main'>
                                <div className='center-div' style={{ textAlign: 'start' }}>
                                    <h6>
                                        CONTACT-INFORMATION
                                    </h6>
                                    <div className='contact-div'>
                                        <img src={mail} alt="" width='10px' height='10px' />
                                        <p style={{ fontSize: 'x-small' }}>{loggeduserinfo[current]?.email}</p>
                                    </div>
                                    <div className='contact-div'>
                                        <img src={pin} alt="" width='10px' height='10px' />
                                        <p style={{ fontSize: 'x-small' }}>{loggeduserinfo[current]?.adress}</p>
                                    </div>
                                    <div className='contact-div'>
                                        <img src={telephone} alt="" width='10px' height='10px' />
                                        <p style={{ fontSize: 'x-small' }}>{loggeduserinfo[current]?.phone}</p>
                                    </div>
                                    <div className='contact-div'>
                                        <img src={age} alt="" width='10px' height='10px' />
                                        <p style={{ fontSize: 'x-small' }}>{loggeduserinfo[current]?.age}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='second-sec'>
                            <div className='contact-div-main'>
                                <div className='center-div center-li' style={{ textAlign: 'start' }}>
                                    <h6 className='titles-h'>SKILLS</h6>
                                    <li style={{ fontSize: 'x-small' }}>{loggeduserinfo?.skill1}</li>
                                    {loggeduserinfo[current]?.skill2 && <li style={{ fontSize: 'x-small' }} >{loggeduserinfo[current]?.skill2}</li>}
                                    {loggeduserinfo[current]?.skill3 && <li style={{ fontSize: 'x-small' }}>{loggeduserinfo[current]?.skill3}</li>}
                                    {loggeduserinfo[current]?.skill4 && <li style={{ fontSize: 'x-small' }}>{loggeduserinfo[current]?.skill4}</li>}
                                    {loggeduserinfo[current]?.skill5 && <li style={{ fontSize: 'x-small' }}>{loggeduserinfo[current]?.skill5}</li>}
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='third-sec'>
                            <div className='contact-div-main'>
                                <div className='center-div center-li' style={{ textAlign: 'start' }} >
                                    <h6 className='titles-h'>LANGUAGES</h6>
                                    <li style={{ fontSize: 'x-small' }}>{loggeduserinfo?.lang1}</li>
                                    {loggeduserinfo[current]?.lang2 && <li style={{ fontSize: 'x-small' }}>{loggeduserinfo[current]?.lang2}</li>}
                                    {loggeduserinfo[current]?.lang3 && <li style={{ fontSize: 'x-small' }}>{loggeduserinfo[current]?.lang3}</li>}
                                    {loggeduserinfo[current]?.lang4 && <li style={{ fontSize: 'x-small' }}>{loggeduserinfo[current]?.lang4}</li>}
                                    {loggeduserinfo[current]?.lang5 && <li style={{ fontSize: 'x-small' }}>{loggeduserinfo[current]?.lang5}</li>}
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='break-cont'>

                        <hr className='break' />
                    </div>

                    <div className='second-row'>

                        <div className='second-main-sec'>
                            {loggeduserinfo[current]?.expirence1 && <div>
                                <div className='contact-div-main'>
                                    <div className='center-div' style={{ textAlign: 'start', wordWrap: 'break-word' }}>
                                        <h6 style={{ margin: '15px' }}>EXPERIENCE</h6>
                                        <div className='exp-cont'>
                                            <h6>{loggeduserinfo[current]?.expirence1.proffsion}</h6>
                                            <p style={{ fontSize: 'x-small' }}>{loggeduserinfo[current]?.expirence1.time}</p>
                                        </div>
                                        <p className='big-text'>{loggeduserinfo[current]?.expirence1.info}</p>
                                    </div>
                                </div>
                            </div>}
                            {loggeduserinfo[current]?.expirence2.proffsion && loggeduserinfo[current]?.expirence2.time && loggeduserinfo[current]?.expirence2.info && <div>
                                <div className='contact-div-main'>
                                    <div className='center-div' style={{ textAlign: 'start', wordWrap: 'break-word' }}>
                                        <div className='exp-cont'>
                                            <h6>{loggeduserinfo[current]?.expirence2.proffsion}</h6>
                                            <p style={{ fontSize: 'x-small' }}>{loggeduserinfo[current]?.expirence2.time}</p>
                                        </div>
                                        <p className='big-text'>{loggeduserinfo[current]?.expirence2.info}</p>
                                    </div>
                                </div>
                            </div>}
                            {loggeduserinfo[current]?.expirence3.proffsion && loggeduserinfo[current]?.expirence3.time && loggeduserinfo[current]?.expirence3.info && <div>
                                <div className='contact-div-main'>
                                    <div className='center-div' style={{ textAlign: 'start', wordWrap: 'break-word' }}>
                                        <div className='exp-cont'>
                                            <h6>{loggeduserinfo[current]?.expirence3.proffsion}</h6>
                                            <p style={{ fontSize: 'x-small' }}>{loggeduserinfo[current]?.expirence3.time}</p>
                                        </div>
                                        <p className='big-text'>{loggeduserinfo[current]?.expirence3.info}</p>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <hr />
                        <div className='third-main-sec'>
                            <div className='contact-div-main'>
                                <div className='center-div' style={{ textAlign: 'start', wordWrap: 'break-word' }}>
                                    <h6 style={{ margin: '0' }}>EDUCATION</h6>
                                    <div className='exp-cont'>
                                        <h6>{loggeduserinfo[current]?.eduction.school}</h6>
                                        <p style={{ fontSize: 'x-small' }}>{loggeduserinfo[current]?.eduction.years}</p>
                                    </div>
                                    <p className='big-text' style={{ margin: '0' }}>{loggeduserinfo[current]?.eduction.bonus}</p>
                                </div>
                            </div>
                            <hr />
                            {loggeduserinfo[current]?.degree.school && loggeduserinfo[current]?.degree.type && loggeduserinfo[current]?.degree.bonus && <div className='contact-div-main'>
                                <div className='center-div' style={{ textAlign: 'start', wordWrap: 'break-word', marginBottom: '35px' }}>
                                    {loggeduserinfo[current]?.degree.school && loggeduserinfo[current]?.degree.type && loggeduserinfo[current]?.degree.bonus && <h6 style={{ margin: '0' }}>DEGREE</h6>}
                                    <div className='exp-cont'>
                                        <h6>{loggeduserinfo[current]?.degree.school}</h6>
                                        <h6 style={{ fontSize: 'x-small' }}>{loggeduserinfo[current]?.degree.type}</h6>
                                    </div>
                                    <p className='big-text' style={{ margin: '0' }}>{loggeduserinfo[current]?.degree.bonus}</p>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>}

            <div className='pdf-button-cont' style={{display:'flex',justifyContent:'center'}}>
                {loggeduserinfo.length > 0 && <button onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} className='pdf-button' onClick={() => convertHtmlToPdf()}>{isHovered?<img src={download} alt="" width={'20px'}/>:'Generate PDF'}</button>}
            </div>

        </div>
    )
}

export default Firsttemplate
