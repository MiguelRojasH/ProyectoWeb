import React from "react"
import "./nav-links.css"


function navlinks() {
    return (
        
        <div> 
            <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link" href="#">INICIO</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">PRODUCTOS</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">QUIÉNES SOMOS</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">CONTACTENOS</a>
            </li>
            </ul>


        </div>
  
    );
  }
  
  export default navlinks;