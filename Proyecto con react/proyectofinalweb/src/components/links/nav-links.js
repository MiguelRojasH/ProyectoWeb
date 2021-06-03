import React from "react"
import "./nav-links.css"
import {Link} from "react-router-dom"


function navlinks() {
    return (
        
        <div id="navscroll" className="navscroll"> 
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




//   function scrollFunction() {
//     // if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//       if (document.documentElement.scrollTop > 20) {
  
//       document.getElementById("navscroll").style.top = "0px";
//     } else {
//       document.getElementById("navscroll").style.top = "60px";
//     }
//   }
  
  
//   // Evento onscroll
//   window.onscroll = function() {
//     scrollFunction()
//   };