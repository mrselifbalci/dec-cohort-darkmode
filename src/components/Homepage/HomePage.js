import React,{useContext} from 'react'
import Form from './Form/Form'
import Profile from './Profile/Profile'
import { ModeContext } from '../../context/ModeContext'


export default function HomePage() {
  const {darkMode,setDarkMode}=useContext(ModeContext)



  return (
    <div className={darkMode ? "home home-dark" : "home" }>
        homepage
        <Profile />
        <Form/>
    </div>
  )
}
