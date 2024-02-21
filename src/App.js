
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import  Login  from "./Login.js"
import Products from "./Products.js";
import './index.css'
import Logo from '../src/images/download.png'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import UserImage from './images/user-profile-icon1.png'
import React, { useEffect, useState } from "react";
import { signWithGoogle } from "./FirebaseAuth";
import { authStatus } from "./service.js";
import PrivateRoute from "./PrivateRoute.js";
import {Navigate} from "react-router-dom";
import UserDetails from "./UserDetails";

function App() {

  return (
    <div>
        <div>
          <BrowserRouter>
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<Products />} exact/>
                <Route element={ <UserDetails/> } path={"/user-details"}/>
              </Route>
              <Route path="/login" element={<Login/>}/>
              <Route path='/*' element={<Navigate to="/login"/>}/>
            </Routes>
          </BrowserRouter>
        </div>
    </div>
  )
}

export default App;
