/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("Home");

  const {getTotalCartAmount,token,setToken} =useContext(StoreContext);
  //for logout function
  const navigate =useNavigate();
  const logout =() =>{
    //remove the token
    localStorage.removeItem("token");
    setToken("");
    navigate("/")


  }

  return (
    <div className="navbar">
      {/* <img src="./logo.jpg" alt="" className="logo" /> */}
      <Link to='/'><h1 className="logo">Food2Go</h1></Link>
      <div className="navbar-menu">
        <Link to='/'
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a href="#app-download"
          onClick={() => setMenu("Mobile-app")}
          className={menu === "Mobile-app" ? "active" : ""}
        >
          Mobile-app
        </a>
        <a href="#footer"
          onClick={() => setMenu("Contact Us")}
          className={menu === "Contact Us" ? "active" : ""}
        >
          Contact Us
        </a>
      </div>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}>Sign in</button>:
        <div className="navbar-profile">
        <img src={assets.profile_icon} alt="" />
        <ul className="nav-profile-dropdown">
          <li><img src={assets.bag_icon}/><p>Orders</p></li>
          <hr/>
          <li onClick={logout}><img src={assets.logout_icon}/><p>Logout</p></li>
        </ul>
      </div>}
    </div>
  </div>
  );
};

export default Navbar;
