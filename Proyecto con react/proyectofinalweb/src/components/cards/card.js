import React from "react"
import { Link } from "react-router-dom"


const Card = ({img}) => (
    
    <Link to="/productos">
    <img src={`${img}`} className="img-fluid card" alt="imagen de productos" />
    </Link>

    );
 
  export default Card;