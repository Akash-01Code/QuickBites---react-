import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
   let btnname = "Login";

   useEffect(() => {
      console.log("header rendered");
   })

   const [btnName,setbtnName] = useState("Login");
    return(
       <div className="header">
          <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="Logo" />
          </div>
          <div className="nav-items">
             <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/about">About Us</Link></li>
                <li><Link to ="/contact">Contact Us</Link></li>
                <li>Cart</li>

                <button className="Login-btn"
                onClick={() => {
                  btnName === "Login"? setbtnName("Logout"): setbtnName("Login");
                }}>{btnName}</button>
             </ul>
          </div>
       </div>
    )
 };
 