import React from "react"
import "./Card2.css"
import Carrito from "../../img/carritoOrange.svg"
import { Link } from "react-router-dom"

const CardWdescription = ({img,description}) => (
    


    <div className="card">
      <img src={`${img}`} className="img-fluid card2" alt="imagen de productos" />

        <div className="card-body">
        <p className="card-text title">{`${description}`}</p>

          <p className="card-text info">Libra: 3.000</p>
          <Link className="noCSS" to="#">

          <div className="carrito_agregar">
            <p className="card-text agregar">Agregar</p>
              <img className="o-carrito" src={Carrito} alt="Icono del carrito de compras"></img>
            </div>

          </Link>
        </div>

    </div> 

   

    );
 
  export default CardWdescription;