import React,{useContext} from 'react'
import {UserContext} from '../../../context/UserContext'
import { ModeContext } from '../../../context/ModeContext'

export default function Profile() {
    const {user,setUser}=useContext(UserContext)
    const {darkMode,setDarkMode}=useContext(ModeContext)

  return (
    <div className={darkMode ? "profile profile-dark" : "profile" }>
        Profile
       <p>{user}</p>
    </div>
  )
}
