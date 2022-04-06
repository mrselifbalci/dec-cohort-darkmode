import './App.css';
import React,{useState} from 'react'
import Header from './components/Header/Header';
import HomePage from './components/Homepage/HomePage';
import Footer from './components/Footer/Footer';
import {UserContext} from './context/UserContext'
import {ModeContext} from './context/ModeContext'

function App() {

const [user,setUser]=useState('Anna')
const [darkMode,setDarkMode]=useState(false)

const toggleMode =()=>{
 setDarkMode(!darkMode)
}


  return (
    <div>
    <ModeContext.Provider value={{darkMode,setDarkMode}}>
          <UserContext.Provider value={{user,setUser}}>
              <Header toggleMode={toggleMode}/>
              <HomePage/>
          </UserContext.Provider>
          <Footer/>
    </ModeContext.Provider>
    
    

    </div>
  );
}

export default App;
