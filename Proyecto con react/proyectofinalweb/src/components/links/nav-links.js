import React from "react"
import "./nav-links.css"
import {Link} from "react-router-dom"


function navlinks() {
    return (
        
        <div> 
            <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link" to="/Inicio">INICIO</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/productos">PRODUCTOS</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/quienes-somos">QUIÉNES SOMOS</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/Contactenos">CONTACTENOS</Link>
            </li>
            </ul>


        </div>
  
    );
  }
  
  export default navlinks;