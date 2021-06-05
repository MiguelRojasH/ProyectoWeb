import React from "react"
import Carne from "../../img/carne2.jpg"
import Chroizo from "../../img/chorizo2.jpg"
import Costilla from "../../img/costilla2.jpg"
import Tocino from "../../img/tocino2.jpg"
import Pollo from "../../img/pollo2.jpg"
import Cerdo from "../../img/cerdo2.jpg"
import "../NuestrosProductos/nproductos.css"
import Card2 from "../cards/card2"

import "./Productos.css"


const ListaProductos = ({title}) => (




            <div className="nproductos">

              <h3 className="card_title">{`${title}`}</h3>

              <div className="o_card list">

              <div className="filter webdesign">
                <Card2 img={Carne} description={"Res"}></Card2>
                </div>
                <Card2 img={Chroizo} description={"Chorizo"}></Card2>
                <Card2 img={Costilla} description={"Costilla"}></Card2>
                <Card2 img={Tocino} description={"Tocino"}></Card2>
                <Card2 img={Pollo} description={"Pollo"}></Card2>
                <Card2 img={Cerdo} description={"Cerdo"}></Card2>

              </div>


            </div> 



  );


export default ListaProductos;