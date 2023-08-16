import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import axios from 'axios';
import Layout from './Layout';
import Signup from './Signup';
import Login from './Login';
import Cvpage from './Cvpage';
import Templates from './Templates';
import Homepage from './Homepage';

function App() {
  const [usersarray, setusersarray] = useState([])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout usersarray={usersarray} />}>
          <Route path='/' element={<Login usersarray={usersarray} />}></Route>
          <Route path='sign' element={<Signup usersarray={usersarray} />}></Route>
          <Route path='makecv' element={<Cvpage usersarray={usersarray} />}></Route>
          <Route path='template' element={<Templates usersarray={usersarray} />}></Route>
          <Route path='home' element={<Homepage usersarray={usersarray} />}></Route>
        </Route>
      </Routes>
    </div>


  )
}

export default App
