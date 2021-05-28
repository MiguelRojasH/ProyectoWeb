import React from "react"
import Carne from "../../img/carne.jpg"
import Chroizo from "../../img/chorizo.jpg"
import Costilla from "../../img/costilla.jpg"
import Tocino from "../../img/tocino.jpg"
import Pollo from "../../img/pollo.jpg"
import Cerdo from "../../img/cerdo.jpg"
import "../NuestrosProductos/nproductos.css"
import Card2 from "../cards/card2"

import "./Productos.css"


const ListaProductos = ({title}) => (




            <div className="nproductos">

              <h3 className="card_title">{`${title}`}</h3>

              <div className="o_card list">
                  
                <Card2 img={Carne} description={"Res"}></Card2>
                <Card2 img={Chroizo} description={"Chorizo"}></Card2>
                <Card2 img={Costilla} description={"Costilla"}></Card2>
                <Card2 img={Tocino} description={"Tocino"}></Card2>
                <Card2 img={Pollo} description={"Pollo"}></Card2>
                <Card2 img={Cerdo} description={"Cerdo"}></Card2>

              </div>


            </div> 



  );


export default ListaProductos;