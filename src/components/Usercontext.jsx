import React from 'react'
import { useEffect } from "react";
import { createContext, useState } from "react";
export const Context = createContext({})
import axios from 'axios';



const Usercontext = ({ children }) => {
  const [loggeduser, setlogged] = useState({})
  const [loggeduserinfo, setloggedinfo] = useState([])
  const [refresh, setrefresh] = useState(false)
  const [current, setcurrent] = useState(0)


  useEffect(() => {
    async function check() {
      if (localStorage.getItem('token')) {
        const tok = localStorage.getItem('token');
        const response = await axios.post("http://localhost:3007/users/istoken", { token: tok });
        if (!response.data.personinfo) {
          alert('dont have info')
        } else {

          const personcv = await axios.post("http://localhost:3007/cv/getcv", { id: response.data._id });
          if (personcv) {
            setloggedinfo(personcv.data.personinfo);
          } else {
            setloggedinfo([])
          }
        }
        setlogged(response.data);
      }
    }
    check();
  }, [refresh])


  return (
    <Context.Provider value={{ loggeduser, loggeduserinfo, refresh, setrefresh, setlogged,current, setcurrent}}>
      {children}
    </Context.Provider>
  )
}

export default Usercontext
