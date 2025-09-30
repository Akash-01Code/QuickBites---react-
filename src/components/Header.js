import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

export const Header = () => {
   let btnname = "Login";

   const [btnName,setbtnName] = useState("Login");
    return(
       <div className="header">
          <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="Logo" />
          </div>
          <div className="nav-items">
             <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
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
 