import React from "react"
import "./nav-links.css"
import {NavLink} from "react-router-dom"
import $ from 'jquery';

function navlinks() {
    return (
        
        <div id="navscroll" className="navscroll"> 
            <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link" to="/Inicio" activeClassName="active">INICIO</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/productos" activeClassName="active">PRODUCTOS</NavLink>
            </li>
            <li id="navCorrected" className="nav-item">
                <NavLink className="nav-link" to="/quienes-somos" activeClassName="active">QUIÉNES SOMOS</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/Contactenos" activeClassName="active">CONTÁCTENOS</NavLink>
            </li>
            </ul>


        </div>
  
    );
  }
  
  export default navlinks;

 