import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { RegisterContext } from '../App'
import { ThemeContext } from '../App'

export default function Register(props) {

  const register = useContext(RegisterContext)
  const isDark = useContext(ThemeContext);

  const [isregister , setRigester] = useState(false)
  useEffect(()=> {
     setRigester(register)
  } , [register])
  

 
  return (
    <div className={isregister ? 'Register active' : 'Register' }>
      <div className={isDark ? 'RegisterContainer dark' :'RegisterContainer'}>
      <div className="Close" onClick={props.ToggleRegister} >
        <box-icon name='x-square' type='solid' color='#680094' ></box-icon>
        </div>

       <div className={isDark ? 'RegisterBody dark' :'RegisterBody'}> 

       <h2 >Join Our Community !</h2>

       <ul>
        <li className={isDark ? 'Name dark' :'Name'}>     <input type="text" placeholder='First Name' />  <input type="text" placeholder='Last Name'/>  </li>
        <li className={isDark ? 'Gmail dark' :'Gmail'}>    <input type="text" placeholder='Gmail'/>  </li>
        <li className={isDark ? 'Password dark' :'Password'}> <input type="password" placeholder='Password' /> <input  type="password" placeholder='Confirm your password' />  </li>
  

       </ul>

       <button className='RegButton'>Register</button>

       </div>
      </div>
        
   
    </div>
  )
}
