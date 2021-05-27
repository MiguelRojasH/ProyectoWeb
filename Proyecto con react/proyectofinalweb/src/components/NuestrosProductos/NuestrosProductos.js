
import React from "react"
import Carnes from "../../img/carnes.png"
import Verduras from "../../img/Verduras.png"
import Vinos from "../../img/Vinos.png"
import "./nproductos.css"



function NuestroProductos() {
  return (

    <div className="nproductos">

            <h3 className="fonttxt">NUESTROS PRODUCTOS</h3>

            <div className="o_card">

                <img src={Carnes} className="img-fluid o_card" alt="imagen de Carnes" />
                <img src={Verduras} className="img-fluid o_card" alt="imagen de Verduras"/>
                <img src={Vinos} className="img-fluid o_card" alt="imagen de Vinos"/>
            
            </div>


    </div> 

  );
}

export default NuestroProductos;