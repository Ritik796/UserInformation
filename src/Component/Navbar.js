import React from "react";
import {NavLink} from "react-router-dom";
import "../Navbar.css";

function Navbar() {
  // const location = useLocation()
  // useEffect(()=>{
  //   console.log(location.pathname)
  //   console.log(location.hash)
  //   console.log(location.key)
  //   console.log(location.search);
  //   console.log(location.state)
  // },[location])
  return (
    <nav className="navbar">
      <div className="navbar-container ">
        <NavLink to="/home" className="navbar-logo ">
          User Information
        </NavLink>
        <ul className="nav-menu">
          <li className="nav-item ">
            <NavLink style={({isActive})=>{
              return {color:isActive?"white":"",backgroundColor:isActive?"black":""}
            }} className={`nav-link `} to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={({isActive})=>{
              return {color:isActive?"white":"",backgroundColor:isActive?"black":""}
            }}to="/login" className={`nav-link `}>
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={({isActive})=>{
              return {color:isActive?"white":"",backgroundColor:isActive?"black":""}
            }} to="/view" className={`nav-link`}>
              View
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={({isActive})=>{
              return {color:isActive?"white":"",backgroundColor:isActive?"black":""}
            }} to="/memo" className={`nav-link `}>
              Currency Converter
            </NavLink>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
