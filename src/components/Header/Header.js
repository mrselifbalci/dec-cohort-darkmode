import React,{useContext} from 'react'
import { ModeContext } from '../../context/ModeContext'
 
export default function Header({toggleMode}) {

  const {darkMode,setDarkMode}=useContext(ModeContext)


  return (
    <div className={darkMode ? "header header-dark" : "header" }>
       <p>header</p>
       <button onClick={toggleMode} className={darkMode ? "btn btn-dark" : "btn" }>
         {darkMode ? "Light Mode" : "Dark Mode"}
       </button>
     
    </div>
  )
}
