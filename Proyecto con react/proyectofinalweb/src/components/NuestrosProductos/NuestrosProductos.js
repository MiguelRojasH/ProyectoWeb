
import React from "react"
import Carnes from "../../img/carnes.png"
import Verduras from "../../img/Verduras.png"
import Vinos from "../../img/Vinos.png"
import Limpieza from "../../img/limpieza.png"
import Mar from "../../img/mar.png"
import Panes from "../../img/panes.png"
import Card from "../cards/card"
import "./nproductos.css"


const NuestroProductos = ({title}) => (



    <div className="nproductos">

            <h3 className="fonttxt">{`${title}`}</h3>

            <div className="o_card">
              
                <Card img={Carnes} ></Card>
                <Card img={Verduras} ></Card>
                <Card img={Vinos} ></Card>
                </div>
                <div className="o_card">
              
              <Card img={Limpieza} ></Card>
              <Card img={Mar} ></Card>
              <Card img={Panes} ></Card>
              </div>
            
          


    </div> 

  );


export default NuestroProductos;