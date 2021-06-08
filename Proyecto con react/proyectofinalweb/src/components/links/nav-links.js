import React from "react"
import "./nav-links.css"
import {NavLink} from "react-router-dom"
import $ from 'jquery';

function navlinks(name) {
    return (
        
        <div id="navscroll" className="navscroll"> 
            <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link" to="/Inicio" activeClassName="active">{name="INICIO"}</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/productos" activeClassName="active">{name="PRODUCTOS"}</NavLink>
            </li>
            <li id="navCorrected" className="nav-item">
                <NavLink className="nav-link" to="/quienes-somos" activeClassName="active">{name="QUIÉNES SOMOS"}</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/Contactenos" activeClassName="active">{name="CONTÁCTENOS"}</NavLink>
            </li>
            </ul>
        </div> 
    );
  }
  
  export default navlinks;

 