import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import "./Navigation.css";
import Logo from "../public/logo.png";

export default function Navigation() {
    return (
        <>
        <nav>
            <ul>
            <div className="dropdown">
                
                <img src={Logo} /> 
                
                
          <a href="#"> <i><AiOutlineBars /> </i> </a>

          <div className="dropdown-content">
                <li>
                    <Link style={{color: 'black'}} to="/">Home</Link>
                </li>
                <li>
                    <Link style={{color: 'black'}} to="/Projects">Projects</Link>
                </li>
                <li>
                    <Link style={{color: 'black'}} to="/About">About</Link>
                </li>
                <li>
                    <Link style={{color: 'black'}} to="/Contact">Contact</Link>
                </li>
                </div>
                </div>
            </ul>
        </nav>
        </>
    )
}