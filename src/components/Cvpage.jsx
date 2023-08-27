import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react'
import { Context } from './Usercontext';
import './cvpage.css'
import bin from './images/bin.png'
import { Outlet, Link, useParams, useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import Upload from './Upload';

const cvpage = ({ usersarray }) => {
  const [moreskills, setskills] = useState(false)
  const [createnew, setcreatenew] = useState(false)
  const [morelang, setlang] = useState(false)
  const [moreexp, setexp] = useState(false)
  const [hasdeg, setdeg] = useState(false)
  const [edit, setedit] = useState(false)
  const [openlogin, setopenlogin] = useState(false)
  const { loggeduser } = useContext(Context)
  const { loggeduserinfo } = useContext(Context)
  const { refresh } = useContext(Context)
  const { setrefresh } = useContext(Context)
  const { current } = useContext(Context)
  const { setcurrent } = useContext(Context)
  const [choose,setchoose] = useState(false)
  const [uploadedData, setUploadedData] = useState('')
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (loggeduserinfo && loggeduserinfo.length > 0) {
  //     setUploadedData(loggeduserinfo[current]['img' ])
  //   }
  // }, [])

  function notlogged() {
    if (Object.keys(loggeduser).length == 0) {
      setopenlogin(true)
    }
  }

  const handleUpload = (data) => {
    setchoose(true)
    setUploadedData(data)
  }

  async function submit(e) {
    e.preventDefault()
    try {
      setexp(true)
      setskills(true)
      setlang(true)
      setdeg(true)
      if (moreexp && morelang && moreskills && hasdeg && Object.keys(loggeduser).length > 0) {
        const newcv = await axios.post(import.meta.env.VITE_SERVER+"/cv/create", {
          id: loggeduser._id,
          desiredprofession : e.target[36].value,
          fullname: e.target[0].value,
          img: uploadedData,
          adress: e.target[3].value,
          phone: e.target[4].value,
          email: e.target[5].value,
          age: e.target[2].value,
          skill1: e.target[6].value,
          skill2: e.target[8].value,
          skill3: e.target[9].value,
          skill4: e.target[10].value,
          skill5: e.target[11].value,
          lang1: e.target[12].value,
          lang2: e.target[14].value,
          lang3: e.target[15].value,
          lang4: e.target[16].value,
          lang5: e.target[17].value,
          objective: e.target[18].value,
          expirence1: {
            proffsion: e.target[19].value,
            time: e.target[20].value,
            info: e.target[21].value
          },
          expirence2: {
            proffsion: e.target[23].value,
            time: e.target[24].value,
            info: e.target[25].value
          },

          expirence3: {
            proffsion: e.target[26].value,
            time: e.target[27].value,
            info: e.target[28].value
          },
          eduction: {
            school: e.target[29].value,
            years: e.target[30].value,
            bonus: e.target[31].value
          },
          degree: {
            school: e.target[33].value,
            type: e.target[34].value,
            bonus: e.target[35].value
          }

        }
        )

        setcreatenew(false)
        setUploadedData('')
        setrefresh(!refresh)
      }
      console.log("works");
    } catch (err) {
      alert(err.message)
    }
  }


  async function submitedit(e) {
    e.preventDefault()
    try {
      setexp(true)
      setskills(true)
      setlang(true)
      setdeg(true)
      if (choose==false) {
        setUploadedData(loggeduserinfo[current].img)
      }
      if (moreexp && morelang && moreskills && hasdeg && Object.keys(loggeduser).length > 0) {
        const newcv = await axios.patch(import.meta.env.VITE_SERVER+"/cv/patchcv", {
          id: loggeduserinfo[current]._id,
          desiredprofession : e.target[36].value,
          fullname: e.target[0].value,
          img:  !choose?loggeduserinfo[current].img : uploadedData,
          adress: e.target[3].value,
          phone: e.target[4].value,
          email: e.target[5].value,
          age: e.target[2].value,
          skill1: e.target[6].value,
          skill2: e.target[8].value,
          skill3: e.target[9].value,
          skill4: e.target[10].value,
          skill5: e.target[11].value,
          lang1: e.target[12].value,
          lang2: e.target[14].value,
          lang3: e.target[15].value,
          lang4: e.target[16].value,
          lang5: e.target[17].value,
          objective: e.target[18].value,
          expirence1: {
            proffsion: e.target[19].value,
            time: e.target[20].value,
            info: e.target[21].value
          },
          expirence2: {
            proffsion: e.target[23].value,
            time: e.target[24].value,
            info: e.target[25].value
          },

          expirence3: {
            proffsion: e.target[26].value,
            time: e.target[27].value,
            info: e.target[28].value
          },
          eduction: {
            school: e.target[29].value,
            years: e.target[30].value,
            bonus: e.target[31].value
          },
          degree: {
            school: e.target[33].value,
            type: e.target[34].value,
            bonus: e.target[35].value
          }
        }
        )
        setedit(false)
        setUploadedData('')
        setrefresh(!refresh)
      }
      console.log("works");
    } catch (err) {
      console.log(err)
    }
  }


  async function deleteresume() {
    try {
      const newcv = await axios.patch(import.meta.env.VITE_SERVER+"/cv/deletecv", { userid: loggeduser._id, cvid: loggeduserinfo[current]._id })
      setrefresh(!refresh)
    }
    catch (err) {
      console.log(err.messege);
    }
  }

  return (
    <div className='main-container'>
        
        <h1 style={{marginTop:'50px'}}>Choose your cv</h1>

      <div className='cv-list-cont'>
        {loggeduserinfo.map((item, index) => (
          <button key={index} className='cv-list-buttons' onClick={() => { setcurrent(index), setedit(false), setcreatenew(false) }}>{loggeduserinfo[index].desiredprofession}</button>
        ))}
      </div>

      <div style={{marginBottom:'50px'}}>
       {loggeduserinfo.length <1&&<h1 className='cv-title'>Fill the form to match your desired job</h1>}
       {loggeduserinfo.length >0&&<h1 className='cv-title'>Edit your information </h1>}
      </div>

      {(createnew || !loggeduserinfo.length > 0) && <form onSubmit={(e) => submit(e)} className='form2'>
        <h2>Personal info</h2>
        <div className='input-cont-one'>
          <div className='input-cont'>
            <h4 className='small-header'>Full-name</h4>
            <input type="text" placeholder='fullname' name='fullname' required={true} className='small-input' />
          </div>
          <div className='input-cont'>
            <h4 className='small-header'>Image</h4>
            <Upload onUpload={handleUpload}></Upload>
            {/* <input type="text" placeholder='profile-image' className='small-input' /> */}
          </div>
          <div className='input-cont'>
            <h4 className='small-header'>Age</h4>
            <input type="text" placeholder='age' required={true} maxLength={3} minLength={2} className='small-input' />
          </div>
        </div>
        <div className='input-cont-one'>
          <div className='input-cont'>
            <h4 className='small-header'>Address</h4>
            <input type="text" placeholder='adress' required={true} className='small-input' />
          </div>
          <div className='input-cont'>
            <h4 className='small-header'>Phone-Number</h4>
            <input type="text" placeholder='phone-number' required={true} className='small-input' />
          </div>
          <div className='input-cont'>
            <h4 className='small-header'>Email</h4>
            <input type="email" placeholder='email' required={true} className='small-input' />
          </div>
        </div>
        <h2>main skills</h2>
        <h3 className='small-header'>Write your proffesion skills</h3>
        <div className='input-cont'>
          <h4 className='small-header'>Skill</h4>
          <input type="text" placeholder='skill' required={true} className='small-input' />
        </div>
        <button onClick={(e) => { e.preventDefault(), setskills(!moreskills) }} className='plus-button'>{!moreskills ? "+" : '-'}
        </button>
        {moreskills && <div style={{ width: '100%', marginBottom: '20px' }}>
          <div className='input-cont-one'>
            <div className='input-cont'>
              <h4 className='small-header'>Skill</h4>
              <input type="text" placeholder='skill' className='small-input' />
            </div>
            <div className='input-cont'>
              <h4 className='small-header'>Skill</h4>
              <input type="text" placeholder='skill' className='small-input' />
            </div>
          </div>
          <div className='input-cont-one'>
            <div className='input-cont'>
              <h4 className='small-header'>Skill</h4>
              <input type="text" placeholder='skill' className='small-input' />
            </div>
            <div className='input-cont'>
              <h4 className='small-header'>Skill</h4>
              <input type="text" placeholder='skill' className='small-input' />
            </div>
          </div>
        </div>}
        <h3 className='small-header'>Write known languages</h3>
        <div className='input-cont'>
          <h4 className='small-header'>language</h4>
          <input type="text" required={true} placeholder='mainlang' className='small-input' />
        </div>
        <button onClick={(e) => { e.preventDefault(), setlang(!morelang) }} className='plus-button'>{!morelang ? "+" : '-'}</button>
        {morelang && <div style={{ width: '100%' }}>
          <div className='input-cont-one'>
            <div className='input-cont'>
              <h4 className='small-header'>language</h4>
              <input type="text" placeholder='mainlang' className='small-input' />
            </div>
            <div className='input-cont'>
              <h4 className='small-header'>language</h4>
              <input type="text" placeholder='mainlang' className='small-input' />
            </div>
          </div>
          <div className='input-cont-one'>
            <div className='input-cont'>
              <h4 className='small-header'>language</h4>
              <input type="text" placeholder='mainlang' className='small-input' />
            </div>
            <div className='input-cont'>
              <h4 className='small-header'>language</h4>
              <input type="text" placeholder='mainlang' className='small-input' />
            </div>
          </div>
        </div>}
        <h3 className='small-header'>Objective</h3>
        <textarea name="" id="" cols="30" rows="7" maxLength={155} required={true} className='text-area-big'></textarea>
        <h2 >Expirence</h2>
        <div className='input-cont-one'>
          <div className='input-cont'>
            <h4 className='small-header'>job name</h4>
            <input type="text" placeholder='proffesion' required={true} className='small-input' />
          </div>
          <div className='input-cont'>
            <h4 className='small-header'>time</h4>
            <input type="text" placeholder='time' required={true} className='small-input' />
          </div>
        </div>
        <div>
          <h4 className='small-header'>job-info</h4>
          <textarea name="" id="" cols="20" rows="4" maxLength={200} required={true} className='exp-input' ></textarea>
        </div>
        <button onClick={(e) => { e.preventDefault(), setexp(!moreexp) }} className='plus-button'>{!moreexp ? "+" : '-'}</button>

        {moreexp && <div>
          <div className='input-cont-one'>
            <div className='input-cont'>
              <h4 className='small-header'>job name</h4>
              <input type="text" placeholder='proffesion' className='small-input' />
            </div>
            <div className='input-cont'>
              <h4 className='small-header'>time</h4>
              <input type="text" placeholder='time' className='small-input' />
            </div>
          </div>
          <div>
            <h4 className='small-header'>job-info</h4>
            <textarea name="" id="" cols="20" rows="4" maxLength={200} className='exp-input' ></textarea>
          </div>
          <div className='input-cont-one'>
            <div className='input-cont'>
              <h4 className='small-header'>job name</h4>
              <input type="text" placeholder='proffesion' className='small-input' />
            </div>
            <div className='input-cont'>
              <h4 className='small-header'>time</h4>
              <input type="text" placeholder='time' className='small-input' />
            </div>
          </div>
          <div>
            <h4 className='small-header'>job-info</h4>
            <textarea name="" id="" cols="20" rows="4" maxLength={200} className='exp-input'></textarea>
          </div>
        </div>}

        <h3>Education</h3>
        <div className='input-cont-one'>
          <div className='input-cont'>
            <h4 className='small-header'>school name</h4>
            <input type="text" placeholder='scool' className='small-input' required={true} />
          </div>
          <div className='input-cont'>
            <h4 className='small-header'>years</h4>
            <input type="text" placeholder='years' className='small-input' maxLength={2} minLength={1} required={true} />
          </div>
        </div>
        <div>
          <h4 className='small-header'>more</h4>
          <textarea name="" id="" cols="20" rows="4" maxLength={155} className='exp-input' required={true}></textarea>
        </div>
        <h3>deggree</h3>
        <button onClick={(e) => { e.preventDefault(), setdeg(!hasdeg) }} className='plus-button-small' >yes/no</button>
        {hasdeg && <div>
          <div className='input-cont-two'>
            <div className='input-cont'>
              <h4 className='small-header'>school name</h4>
              <input type="text" placeholder='scool' className='small-input'  />
            </div>
            <div className='input-cont'>
              <h4 className='small-header'>years</h4>
              <input type="text" placeholder='type' className='small-input'  />
            </div>
          </div>
          <div>
            <h4 className='small-header'>more</h4>
            <textarea name="" id="" cols="20" rows="4" maxLength={155} className='exp-input' ></textarea>
          </div>
        </div>}
        <div className='input-cont'>
            <h4 className='small-header'>Your desired profession</h4>
            <input type="text" placeholder='proffesion' required={true} className='small-input' />
          </div>
      
        <button type="submit" className='submit-button' onClick={() => notlogged()}>{moreexp && moreskills && morelang && hasdeg ? 'confirm new' : 'new'}</button>
      </form>}




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
        p: 4,
      }}>
        <h1>
          you need to login
        </h1>
        <Link>
          <button>login</button>
        </Link>
        <button onClick={() => setopenlogin(false)}>back</button>
      </Box>}



      {/* Object.keys(loggeduserinfo).length > 0 */}

      {(edit && loggeduserinfo.length > 0) && <form onSubmit={(e) => submitedit(e)} className='form2'>
        <h2>Your info</h2>
        <div className='input-cont-one'>
          <div className='input-cont'>
            <h4 className='small-header'>Full name</h4>
            <input type="text" placeholder='fullname' name='fullname' defaultValue={loggeduserinfo[current].fullname} required={true} className='small-input' />
          </div>
          <div className='input-cont'>
            <h4 className='small-header'>Image</h4>
            <Upload onUpload={handleUpload}></Upload>
            {/* <input type="text" placeholder='profile-image' defaultValue={loggeduserinfo[current].img} className='small-input' /> */}
          </div>
          <div className='input-cont'>
            <h4 className='small-header'>age</h4>
            <input type="text" placeholder='age' defaultValue={loggeduserinfo[current].age} required={true} maxLength={3} minLength={2} className='small-input' />
          </div>
        </div>
        <div className='input-cont-one'>
          <div className='input-cont'>
            <h4 className='small-header'>Address</h4>
            <input type="text" placeholder='adress' defaultValue={loggeduserinfo[current].adress} required={true} className='small-input' />
          </div>
          <div className='input-cont'>
            <h4 className='small-header'>Phone-Number</h4>
            <input type="text" placeholder='phone-number' defaultValue={loggeduserinfo[current].phone} required={true} className='small-input' />
          </div>
          <div className='input-cont'>
            <h4 className='small-header'>Email</h4>
            <input type="email" placeholder='email' defaultValue={loggeduserinfo[current].email} required={true} className='small-input' />
          </div>
        </div>
        <h2>main skills</h2>
        <h3 className='small-header'>Write your proffesion skills</h3>
        <div className='input-cont'>
          <h4 className='small-header'>Skill-one</h4>
          <input type="text" placeholder='skill' defaultValue={loggeduserinfo[current].skill1} required={true} className='small-input' />
        </div>
        <button onClick={(e) => { e.preventDefault(), setskills(!moreskills) }} className='plus-button'>{!moreskills ? "+" : '-'}
        </button>
        {moreskills && <div style={{ width: '100%', marginBottom: '20px' }}>
          <div className='input-cont-one'>
            <div className='input-cont'>
              <h4 className='small-header'>Skill-two</h4>
              <input type="text" placeholder='skill' defaultValue={loggeduserinfo[current].skill2} className='small-input' />
            </div>
            <div className='input-cont'>
              <h4 className='small-header'>Skill-three</h4>
              <input type="text" placeholder='skill' defaultValue={loggeduserinfo[current].skill3} className='small-input' />
            </div>
          </div>
          <div className='input-cont-one'>
            <div className='input-cont'>
              <h4 className='small-header'>Skill-four</h4>
              <input type="text" placeholder='skill' defaultValue={loggeduserinfo[current].skill4} className='small-input' />
            </div>
            <div className='input-cont'>
              <h4 className='small-header'>Skill-five</h4>
              <input type="text" placeholder='skill' defaultValue={loggeduserinfo[current].skill5} className='small-input' />
            </div>
          </div>
        </div>}
        <div className='input-cont'>
          <h4 className='small-header'>lang 1 </h4>
          <input type="text" required={true} placeholder='mainlang' defaultValue={loggeduserinfo[current].lang1} className='small-input' />
        </div>
        <button onClick={(e) => { e.preventDefault(), setlang(!morelang) }} className='plus-button'>{!morelang ? "+" : '-'}</button>
        {morelang && <div style={{ width: '100%' }}>
          <div className='input-cont-one'>
            <div className='input-cont'>
              <h4 className='small-header'>lang 2</h4>
              <input type="text" placeholder='mainlang' defaultValue={loggeduserinfo[current].lang2} className='small-input' />
            </div>
            <div className='input-cont'>
              <h4 className='small-header'>lang3</h4>
              <input type="text" placeholder='mainlang' defaultValue={loggeduserinfo[current].lang3} className='small-input' />
            </div>
          </div>
          <div className='input-cont-one'>
            <div className='input-cont'>
              <h4 className='small-header'>lang 4</h4>
              <input type="text" placeholder='mainlang' defaultValue={loggeduserinfo[current].lang4} className='small-input' />
            </div>
            <div className='input-cont'>
              <h4 className='small-header'>lang 5</h4>
              <input type="text" placeholder='mainlang' defaultValue={loggeduserinfo[current].lang5} className='small-input' />
            </div>
          </div>
        </div>}
        <h3 className='small-header'>Objective</h3>
        <textarea name="" id="" cols="30" rows="7" maxLength={200} required={true} defaultValue={loggeduserinfo[current].objective} className='text-area-big'></textarea>
        <h2 >Expirence</h2>
        <div className='input-cont-one'>
          <div className='input-cont'>
            <h4 className='small-header'>job name</h4>
            <input type="text" placeholder='proffesion' required={true} defaultValue={loggeduserinfo[current].expirence1.proffsion} className='small-input' />
          </div>
          <div className='input-cont'>
            <h4 className='small-header'>time</h4>
            <input type="text" placeholder='time' required={true} defaultValue={loggeduserinfo[current].expirence1.time} className='small-input' />
          </div>
        </div>
        <div>
          <h4 className='small-header'>job-info</h4>
          <textarea name="" id="" cols="20" rows="4" maxLength={200} required={true} defaultValue={loggeduserinfo[current].expirence1.info} className='exp-input' ></textarea>
        </div>
        <button onClick={(e) => { e.preventDefault(), setexp(!moreexp) }} className='plus-button'>{!moreexp ? "+" : '-'}</button>

        {moreexp && <div>
          <div className='input-cont-one'>
            <div className='input-cont'>
              <h4 className='small-header'>job name</h4>
              <input type="text" placeholder='proffesion' defaultValue={loggeduserinfo[current].expirence2.proffsion} className='small-input' />
            </div>
            <div className='input-cont'>
              <h4 className='small-header'>time</h4>
              <input type="text" placeholder='time' defaultValue={loggeduserinfo[current].expirence2.time} className='small-input' />
            </div>
          </div>
          <div>
            <h4 className='small-header'>job-info</h4>
            <textarea name="" id="" cols="20" rows="4" maxLength={200} defaultValue={loggeduserinfo[current].expirence2.info} className='exp-input' ></textarea>
          </div>
          <div className='input-cont-one'>
            <div className='input-cont'>
              <h4 className='small-header'>job name</h4>
              <input type="text" placeholder='proffesion' defaultValue={loggeduserinfo[current].expirence3.proffsion} className='small-input' />
            </div>
            <div className='input-cont'>
              <h4 className='small-header'>time</h4>
              <input type="text" placeholder='time' defaultValue={loggeduserinfo[current].expirence3.time} className='small-input' />
            </div>
          </div>
          <div>
            <h4 className='small-header'>job-info</h4>
            <textarea name="" id="" cols="20" rows="4" maxLength={200} defaultValue={loggeduserinfo[current].expirence3.info} className='exp-input'></textarea>
          </div>
        </div>}

        <h3>Education</h3>
        <div className='input-cont-one'>
          <div className='input-cont'>
            <h4 className='small-header'>school name</h4>
            <input type="text" placeholder='scool' defaultValue={loggeduserinfo[current].eduction.school} className='small-input' required={true} />
          </div>
          <div className='input-cont'>
            <h4 className='small-header'>years</h4>
            <input type="text" placeholder='years' className='small-input' defaultValue={loggeduserinfo[current].eduction.years} maxLength={2} minLength={1} required={true} />
          </div>
        </div>
        <div>
          <h4 className='small-header'>more</h4>
          <textarea name="" id="" cols="20" rows="4" maxLength={155} className='exp-input' defaultValue={loggeduserinfo[current].eduction.bonus} required={true}></textarea>
        </div>
        <h3>deggree</h3>
        <button onClick={(e) => { e.preventDefault(), setdeg(!hasdeg) }} className='plus-button-small' >yes/no</button>
        {hasdeg && <div>
          <div className='input-cont-two'>
            <div className='input-cont'>
              <h4 className='small-header'>school name</h4>
              <input type="text" placeholder='scool' defaultValue={loggeduserinfo[current].degree.school} className='small-input'  />
            </div>
            <div className='input-cont'>
              <h4 className='small-header'>years</h4>
              <input type="text" placeholder='type' defaultValue={loggeduserinfo[current].degree.type} className='small-input'  />
            </div>
          </div>
          <div>
            <h4 className='small-header'>more</h4>
            <textarea name="" id="" cols="20" rows="4" maxLength={155} className='exp-input' defaultValue={loggeduserinfo[current].degree.bonus} ></textarea>
          </div>
        </div>}
        <div className='input-cont'>
            <h4 className='small-header'>Your desired profession</h4>
            <input type="text" placeholder='proffesion' required={true} defaultValue={loggeduserinfo[current].desiredprofession} className='small-input' />
          </div>
        <button type="submit" className='submit-button'>{moreexp && moreskills && morelang && hasdeg ? 'confirm edit' : 'edit'}</button>
      </form>}



      {loggeduserinfo.length > 0 && (!edit && !createnew) && <div className='show-info-cont'>
        {/* <div style={{ textAlign: 'center' }}><h1>your info</h1></div> */}
        <div className='show-info-cont-second'>
          <div className='profile-info-cont'>
            <img src={loggeduserinfo[current]?.img} alt="https://icon-library.com/images/blank-person-icon/blank-person-icon-7.jpg" />
            <div className='profile-square'>
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <h3>{loggeduserinfo[current]?.fullname}</h3>
                <h3>{loggeduserinfo[current]?.age}</h3>
              </div>
              <h3>{loggeduserinfo.email}</h3>
              <h3 style={{ textAlign: 'center' }}>{loggeduserinfo[current]?.phone}</h3>
            </div>

            <h3 style={{ textAlign: 'center' }}>Objective</h3>

            <div>
              <p style={{ overflowWrap: 'break-word' }}>{loggeduserinfo[current]?.objective}</p>
            </div>


          </div>
          <div className='profile-exp-cont'>
            <div>
              <h3> your expirences</h3>
              <div>
                <p>{loggeduserinfo[current]?.expirence1.proffsion}</p>
                <p>{loggeduserinfo[current]?.expirence1.time} </p>
                <p className='small-font'>{loggeduserinfo[current]?.expirence1.info}</p>
              </div>
              <div>
                <p>{loggeduserinfo[current]?.expirence2.proffsion}</p>
                <p>{loggeduserinfo[current]?.expirence2.time} </p>
                <p className='small-font'>{loggeduserinfo[current]?.expirence2.info}</p>
              </div>
              <div>
                <p>{loggeduserinfo[current]?.expirence3.proffsion}</p>
                <p>{loggeduserinfo[current]?.expirence3.time} </p>
                <p className='small-font'>{loggeduserinfo[current]?.expirence3.info}</p>
              </div>
              <div>
                <h3>LANGUAGES</h3>
                <div style={{ display: 'flex', flexDirection: 'column', rowGap: '13px', alignItems: "flex-start", textAlign: 'center' }}>
                  <div className='skill-cricle'>{loggeduserinfo[current]?.lang1}</div>
                  <div className='skill-cricle'>{loggeduserinfo[current]?.lang2}</div>
                  <div className='skill-cricle'>{loggeduserinfo[current]?.lang3}</div>
                  <div className='skill-cricle'>{loggeduserinfo[current]?.lang4}</div>
                  <div className='skill-cricle'>{loggeduserinfo[current]?.lang5}</div>
                </div>
              </div>
            </div>
          </div>
          <div className='profile-exp-cont'>
            <div>
              <h3> your Education</h3>
              <p>{loggeduserinfo[current]?.eduction.school}</p>
              <p>{loggeduserinfo[current]?.eduction.years} years</p>
              <p className='small-font'>{loggeduserinfo[current]?.eduction.bonus}</p>
            </div>
            <div>
              <h3> your Degree</h3>
              <p>{loggeduserinfo[current]?.degree.school}</p>
              <p>{loggeduserinfo[current]?.degree.type} years</p>
              <p className='small-font'>{loggeduserinfo[current]?.degree.bonus}</p>
            </div>

            <div>
              <h3>Skills</h3>
              <div style={{ display: 'flex', flexDirection: 'column', rowGap: '13px', alignItems: "flex-start", textAlign: 'center' }}>
                <div className='skill-cricle'>{loggeduserinfo[current]?.skill1}</div>
                <div className='skill-cricle'>{loggeduserinfo[current]?.skill2}</div>
                <div className='skill-cricle'>{loggeduserinfo[current]?.skill3}</div>
                <div className='skill-cricle'>{loggeduserinfo[current]?.skill4}</div>
                <div className='skill-cricle'>{loggeduserinfo[current]?.skill5}</div>
              </div>
            </div>


          </div>
        </div>
        <div className='delete-cont'>
          <button className='delete-button' onClick={() => deleteresume()}>
            <img src={bin} alt="" width='20px' />
          </button>
        </div>
      </div>}
      {loggeduserinfo.length > 0 && <div className='buttons-div'>
        <button className='change-info-buttons' onClick={() => { setcreatenew(!createnew), setedit(false) }}>new +</button>
        <button className='change-info-buttons' onClick={() => { setedit(!edit), setcreatenew(false) }}>   edit </button>
      </div>}


    </div>
  )
}



export default cvpage
