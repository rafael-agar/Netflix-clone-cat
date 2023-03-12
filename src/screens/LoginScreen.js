import React, { useState } from 'react'
import "./LoginScreen.css"
import logo from "../img/logo.png"
import SignupScreen from './SignupScreen';

function LoginScreen() {
    const [sigIn, setSigIn] = useState(false);

  return (
    <div className='loginScreen'>
        <div className='loginScreen__background'>
            <img className='loginScreen__logo' src={logo} />
        </div>
        <button 
            onClick={() => setSigIn(true)}
            className='loginScreen__botton'>Sign In
        </button>
        <div className='loginScreen__gradient'></div>
        <div className='loginScreen__body'>
            {sigIn ? ( <SignupScreen />) : ( //verify sigin
                <>
                <h1>Many films! community productions and more.</h1>
                <h2>Whatch anywhere time. Cancel any time</h2>
                <h3>Ready to watch?, Enter your Email to create a account o restart your membership.</h3>

                <div className='loginScreen__input'>
                    <form>
                        <input type="email" placeholder='Email Address'></input>
                        <button 
                            onClick={() => setSigIn(true)}
                            className='loginScreen_getStarted'>GET STARTED</button>
                    </form>
                </div>
            </>
            )}
            
        </div> //text and box
    </div>
  )
}

export default LoginScreen