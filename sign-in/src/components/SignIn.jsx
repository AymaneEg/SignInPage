import React, { useEffect } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App'


const MODE_ICO = {

}

export default function SignIn(props) {

    const isDark = useContext(ThemeContext);

    useEffect(()=>{
      document.getElementById('moon').setAttribute('name' , isDark ? 'sun' : 'moon')
      document.getElementById('moon').setAttribute('color' , isDark ? '#FFF' : '#680094')
    }, [isDark])





  return (
    <div className={isDark ? 'SignIn dark' :'SignIn'}> 
     <div className='moon'>        
        <box-icon name='moon'  onClick={props.ToogleTheme} color='#680094' id="moon" ></box-icon>
     </div>

        <div className={isDark ? 'SigInBody dark' :'SigInBody' }> 
            <h2> Sing In  </h2>
            <ul>
                <li><input type="text" placeholder='Gmail' className={isDark ? 'TextFeild dark' :'TextFeild'}/></li>
                <li><input type="password" placeholder='Password' className={isDark ? 'TextFeild dark' :'TextFeild'}/></li>
            </ul> 

            <button className='Button'>Sign in</button>
            <div className='Links'> 
                <span onClick={props.ToggleRegister}>Register</span> 
                <span onClick={props.ToggleRecover}>Forget Password ?</span>
            </div>
   
        </div>
    </div>
  )
}
