
import React from "react"
import Carnes from "../../img/carnes.png"
import Verduras from "../../img/Verduras.png"
import Vinos from "../../img/Vinos.png"
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


    </div> 

  );


export default NuestroProductos;