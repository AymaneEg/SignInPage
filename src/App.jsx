import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SignIn from './components/SignIn'
import Register from './components/Register'
import React from 'react'
import PasswordRecover from './components/PasswordRecover'

export const RegisterContext = React.createContext();
export const ThemeContext = React.createContext();


function App() {

  const [register , setRigester] = useState(false);
  const [isDark , setDark] = useState(false);
  const [Recover , setRecovet] = useState(false);

  function ToggleRegister(){
    setRigester(prev => !prev)
  }

  function ToogleTheme(){
    setDark(prevDark => !prevDark)
    console.log("Theme toggle")
  }

  function ToggleRecover(){
    setRecovet(prev => !prev)
  }
  return (
    <>
    <ThemeContext.Provider value={isDark}>
      <RegisterContext.Provider value={register}>
        <SignIn ToggleRegister={ToggleRegister} ToogleTheme={ToogleTheme} ToggleRecover={ToggleRecover} />
        <Register ToggleRegister={ToggleRegister} />
        <PasswordRecover Recover={Recover} ToggleRecover={ToggleRecover}/>
      </RegisterContext.Provider>
    </ThemeContext.Provider>

    </>
  )
}

export default App
