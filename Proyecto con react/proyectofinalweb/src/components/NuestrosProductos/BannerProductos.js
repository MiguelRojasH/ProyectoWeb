
import React from "react"
import Frutas from "../../img/frutas.jpg"
import Verduras from "../../img/verduras.jpg"
import Carne from "../../img/carne.jpg"
import Mariscos from "../../img/mariscos.jpg" 
import CardsWdescription from "../cards/cardsWdescription"
import "./nproductos.css"


const BannerProductos = ({title}) => (



    <div className="nproductos">

            <h3 className="card_title">{`${title}`}</h3>

            <div className="o_card">
              
            <CardsWdescription img={Frutas} description={"Frutas"}></CardsWdescription>
            <CardsWdescription img={Verduras} description={"Verduras"}></CardsWdescription>
            <CardsWdescription img={Carne} description={"Carne"}></CardsWdescription>
            <CardsWdescription img={Mariscos} description={"Mariscos"}></CardsWdescription>
            
            </div>


    </div> 

  );


export default BannerProductos;