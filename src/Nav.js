import React, { useEffect, useState } from 'react'
import "./Nav.css"
import companyLogo from './img/logo.png'
import userIcon from './img/userIcon.png'
import { useNavigate } from 'react-router-dom';
// import ProfileScreen from './screens/ProfileScreen';


export default function Nav() {
    const [show, handleShow] = useState(false);
    //activate link profile using imagen icon
    const navigate = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }
    //  unmounted the dom
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => window.removeEventListener("scroll", transitionNavBar)
        // cleaning
    }, [])

    return (
        // {} jsx, and the 2nd {} for js
        //if show is true return "nav__black"???
    <div className={`nav ${show && "nav__black"}`}>
        <div className='nav__contents'>
            <img
            onClick={() => navigate("/")}
                className='nav__logo'
                src={companyLogo}
                alt='logo'
            />
            {/* program to navegate, using this link, onClick useHistory */}
            <img
                onClick= {() => navigate("/profile")}
                className='nav__avatar'
                src={userIcon} 
                alt=''
            /> 
        </div>
    </div>
    )
}
