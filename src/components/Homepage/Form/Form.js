import React,{useContext} from 'react'
import { ModeContext } from '../../../context/ModeContext'

export default function Form() {
  const {darkMode,setDarkMode}=useContext(ModeContext)
  return (
    <div className={darkMode ? "form form-dark" : "form" }>
      Form
    </div>
  )
}
