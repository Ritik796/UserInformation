import React from "react";
import { Link ,useLocation} from "react-router-dom";
import "../Navbar.css";

function Navbar() {
  const location = useLocation()
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
        <Link to="/home" className="navbar-logo ">
          User Information
        </Link>
        <ul className="nav-menu">
          <li className="nav-item ">
            <Link  className={`nav-link ${location.pathname==='/home'?"change":" "}`} to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className={`nav-link ${location.pathname==='/login'?"change":" "}`}>
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/view" className={`nav-link ${location.pathname==='/view'?"change":" "}`}>
              View
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/memo" className={`nav-link ${location.pathname==='/memo'?"change":" "}`}>
              Currency Converter
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
