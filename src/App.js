import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen"
import {auth} from './theFire'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
const user = useSelector(selectUser) //check status user on Redux storage
const dispatch = useDispatch();

useEffect(() => {
  // listend any change authenticate, check in the coockies
  const unsuscribe = auth.onAuthStateChanged((userAuth) => {
    if (userAuth) {
      //log in, call the userSlice module
      // console.log(userAuth);
      dispatch(login({
        uid: userAuth.uid, // you're login, so, dispatch
        email: userAuth.email, //object data
      }))
    } else {
      // logged out, call the userSlice module
      dispatch(logout());
    }
  })

  return unsuscribe;
},[dispatch])

  return (
    <div className="app">
      <Router>
        {/* flow controll, no user login, go to page login */}
        {!user ? (<LoginScreen />) : (
          <Routes>
            <Route exact path="/profile" element={<ProfileScreen />}>
            </Route>
            <Route exact path="/" element={<HomeScreen />}>
            </Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
