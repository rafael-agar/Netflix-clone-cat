import React from 'react'
import "./ProfileScreen.css"
import Nav from '../Nav'
import userIcon from '../img/userIcon.png'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice'
import {auth} from "../theFire"

function ProfileScreen() {
  const user = useSelector(selectUser) //get user from userSlice login/logout

  return (
    <div className='profileScreen'>
      <Nav />
      <div className='profileScreen__body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen__info'>
          <img src={userIcon}></img>
          <div className='profileScreen__details'>
            <h2>{user.email}</h2>
            <div className='profileScreen__plans'>
              <h3>Plans</h3>
            <button onClick={() => auth.signOut() } className='profileScreen_signOut'>Sign Out</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen