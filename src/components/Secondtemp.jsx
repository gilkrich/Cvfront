import React from 'react'
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";
import { useContext } from 'react'
import './secondtemp.css'
import { Context } from './Usercontext';

const Secondtemp = () => {

    const { loggeduser } = useContext(Context)
    const { loggeduserinfo } = useContext(Context)
    const { refresh } = useContext(Context)
    const { setrefresh } = useContext(Context)
    const { current } = useContext(Context)
    const { setcurrent } = useContext(Context)

    const convertHtmlToPdf = () => {
        const input = document.getElementById("second-template")
        const pxWidth = input.offsetWidth
        const pxHeight = input.offsetHeight

        html2canvas(input, {
            width: pxWidth,
            height: pxHeight,
            scale: 1.8,
            allowTaint: true,
             useCORS:true
        })
            .then((canvas) => {
                const imgData = canvas.toDataURL("image/png");
                const pdf = new jsPDF('portrait', 'px', [pxWidth, pxHeight]);
                pdf.addImage(imgData, 'PNG', 0, 0);
                pdf.save("my-resume.pdf")
            })
    }


    return (
        <div style={{marginTop:'60px'}}>
            <div id='second-template'>
                <div className='column-one'>
                    <div className='image-cont'>
                        <img src={loggeduserinfo[current]?.img} alt="" className='profile-main-image' />
                    </div>
                    <div className='contact-div-sec'>
                        <h5 className='titles'>Contact</h5>
                        <hr className='white-hr' />
                        <div className='contact-info-cont'>
                            <div className='contact-info-div'>
                                <h6 style={{ margin: '0' }} className='small-title-sec'>Phone</h6>
                                <p className='text-size-small-white'>{loggeduserinfo[current]?.phone}</p>
                            </div>
                            <div className='contact-info-div'>
                                <h6 style={{ margin: '0' }} className='small-title-sec'>Email</h6>
                                <p className='text-size-small-white'>{loggeduserinfo[current]?.email}</p>
                            </div>
                            <div className='contact-info-div'>
                                <h6 style={{ margin: '0' }} className='small-title-sec'>Adress</h6>
                                <p className='text-size-small-white'>{loggeduserinfo[current]?.adress}</p>
                            </div>
                            <div className='contact-info-div'>
                                <h6 style={{ margin: '0' }} className='small-title-sec'>Age</h6>
                                <p className='text-size-small-white'>{loggeduserinfo[current]?.age}</p>
                            </div>
                        </div>
                    </div>
                    <div className='contact-div-sec'>
                        <h5 className='titles'>Skills</h5>
                        <hr className='white-hr' />
                        <ul className='contact-info-ul-sec'>
                            <li className='text-size-small-white'>{loggeduserinfo[current]?.skill1}</li>
                            <li className='text-size-small-white'>{loggeduserinfo[current]?.skill2}</li>
                            <li className='text-size-small-white'>{loggeduserinfo[current]?.skill3}</li>
                            <li className='text-size-small-white'>{loggeduserinfo[current]?.skill4}</li>
                            <li className='text-size-small-white'>{loggeduserinfo[current]?.skill5}</li>
                        </ul>
                    </div>
                    <div className='contact-div-sec'>
                        <h5 className='titles'>lang</h5>
                        <hr className='white-hr' />
                        <ul className='contact-info-ul-sec' style={{marginRight:'0px'}}>
                            <li className='text-size-small-white'>{loggeduserinfo[current]?.lang1}</li>
                            <li className='text-size-small-white'>{loggeduserinfo[current]?.lang2}</li>
                            <li className='text-size-small-white'>{loggeduserinfo[current]?.lang3}</li>
                            <li className='text-size-small-white'>{loggeduserinfo[current]?.lang4}</li>
                            <li className='text-size-small-white'>{loggeduserinfo[current]?.lang5}</li>
                        </ul>
                    </div>

                </div>
                <div className='column-two'>
                    <div className='name-and-obj'>
                        <div>
                            <h2 style={{marginLeft:'27px'}}>{loggeduserinfo[current]?.fullname}</h2>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className='info-big-cont-sec'>
                                <h5>Objective</h5>
                                <p className='text-size-small-black'>
                                    {loggeduserinfo[current]?.objective}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='exp-cont-sec'>
                        <h5 style={{marginBottom:'0',textAlign:'center'}}>exprience </h5>
                        <hr />
                        <div className='exp-split-cont'>
                              <div className='split-first'>
                                  <div className='circle'></div>
                                  <div className='circle-line'></div>
                              </div>
                              <div className='split-second'>
                              <p className='text-size-small-black' style={{margin:'0'}}>
                                    {loggeduserinfo[current]?. expirence1.time}
                                </p>
                                <p className='text-size-small-black'>
                                {loggeduserinfo[current]?. expirence1.proffsion}
                                </p>
                                <p className='text-size-small-black'>
                                {loggeduserinfo[current]?. expirence1.info}
                                </p>
                              </div>
                        </div>
                        <div className='exp-split-cont'>
                              <div className='split-first'>
                                  <div className='circle'></div>
                                  <div className='circle-line'></div>
                              </div>
                              <div className='split-second'>
                              <p className='text-size-small-black' style={{margin:'0'}}>
                                    {loggeduserinfo[current]?. expirence1.time}
                                </p>
                                <p className='text-size-small-black'>
                                {loggeduserinfo[current]?. expirence1.proffsion}
                                </p>
                                <p className='text-size-small-black'>
                                {loggeduserinfo[current]?. expirence1.info}
                                </p>
                              </div>
                        </div>
                        <div className='exp-split-cont'>
                              <div className='split-first'>
                                  <div className='circle'></div>
                                  <div className='circle-line'></div>
                              </div>
                              <div className='split-second'>
                              <p className='text-size-small-black' style={{margin:'0'}}>
                                    {loggeduserinfo[current]?. expirence1.time}
                                </p>
                                <p className='text-size-small-black'>
                                {loggeduserinfo[current]?. expirence1.proffsion}
                                </p>
                                <p className='text-size-small-black'>
                                {loggeduserinfo[current]?. expirence1.info}
                                </p>
                              </div>
                        </div>
                    </div>
                    <div className='education-cont-sec'>
                           <h5 style={{marginBottom:'0'}}>Education</h5>
                           <hr />
                           <div className='school-cont-sec'>
                            <div style={{display:'flex',justifyContent:'space-around'}}>
                               <p className='text-size-small-black'>
                               {loggeduserinfo[current]?. eduction.school}
                               </p>
                               <p className='text-size-small-black'>
                               {loggeduserinfo[current]?. eduction.years}
                               </p>
                            </div>
                               <p className='text-size-small-black'>
                               {loggeduserinfo[current]?. eduction.bonus}
                               </p>
                           </div>
                    </div>
                    <div className='education-cont-sec'>
                           <h5 style={{marginBottom:'0'}}>Degree</h5>
                           <hr />
                           <div className='school-cont-sec'>
                            <div style={{display:'flex',justifyContent:'space-around'}}>
                               <p className='text-size-small-black'>
                               {loggeduserinfo[current]?. degree.school}
                               </p>
                               <p className='text-size-small-black'>
                               {loggeduserinfo[current]?. degree.type}
                               </p>
                            </div>
                               <p className='text-size-small-black'>
                               {loggeduserinfo[current]?. degree.bonus}
                               </p>
                           </div>
                    </div>

                </div>
            </div>   
            {loggeduserinfo.length > 0 && <button onClick={()=>convertHtmlToPdf()}>Generate PDF</button>}
        </div>
    )
}

export default Secondtemp
