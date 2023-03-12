import React, {useRef} from 'react'
import { auth } from "../theFire.js"
import "./sigupScreen.css"

function Signup() {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    //events onClinck REGISTER USER
    const register = (e) => {
        e.preventDefault()
         //registra mediante firebase
        auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .then ((authUser) => console.log(authUser))
        .catch((error) => alert(error.message))
    }

    const sigIn = (e) => {
        e.preventDefault()
        //ingresa mediante firebase
        auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .then((authUser) => console.log(authUser))
        .catch((error) => alert(error.message))
    }

  return (
    <div className='SignupScreen'>
        <form>
            <h1>Sig Up</h1>
            <input ref={emailRef} placeholder='Email' type="Email"></input>
            <input ref={passwordRef} placeholder='password' type="password"></input>
            <button type='submit' onClick={register}>Sig Up now!</button>
        </form>
    </div>
  )
}

export default Signup