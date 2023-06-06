import React from 'react'
import { useState } from 'react'
import  ReactDom  from 'react-dom'


export default function PasswordRecover(props) {

  const [gotPassword , setGotpassword] = useState(false);

  const style = {
    display: gotPassword ? 'inline' : 'none',
    height : gotPassword ? '5vh' : '0vh' 

  }

  return ReactDom.createPortal (
    <>
    <div className='PasswordContainer' style={{display : props.Recover ? 'block' : 'none'}}>
        <div className='Recover'> 
        <div className='IcoDiv'>
        <box-icon type='solid' name='message-square-x' color="#680094" onClick={props.ToggleRecover}></box-icon>
        </div>
             <h1>Ooh , never mind we'll fix that for you !</h1>
              
                <ul>
                    <li><input type="text"  placeholder='Your Gmail' /></li>
                    <li><button onClick={()=> setGotpassword(prev => !prev)}>submit</button></li>
                    <li >
                        <input type="text" placeholder='*** ***' id='PasswordInput' style={style}/>
                    </li>
                    
                </ul>                
             
        </div>
    </div> 
    </> , document.getElementById('pass')
  )
}
