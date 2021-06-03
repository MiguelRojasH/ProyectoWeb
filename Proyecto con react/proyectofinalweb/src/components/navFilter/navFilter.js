
import React from "react"
import Icons from "../icons/icons"

import ComestiblesIcon from "../../img/comestibles.svg"
import CarneIcon from "../../img/carne.svg"
import FrutasIcon from "../../img/cosecha.svg"
import OfertaIcon from "../../img/etiqueta (1).svg"
import PezcadoIcon from "../../img/pescado.svg"
import VerdurasIcon from "../../img/verduras.svg"
import PanIcon from "../../img/un-pan.svg"
import "./navFilter.css"



function navFilter() {
  return (

 <ul className="nav nav-tabs">

<li className="nav-item">
    <a className="nav-link active" href="#">
    <Icons img={CarneIcon} description={"Carne"}> </Icons> 
    </a>
  </li>

  <li className="nav-item">
    <a className="nav-link " href="#">
    <Icons img={OfertaIcon} description={"Ofertas"}> </Icons> 
    </a>
  </li>

  <li className="nav-item">
    <a className="nav-link" href="#">
    <Icons img={ComestiblesIcon} description={"Comestibles"}> </Icons> 
    </a>
  </li>

  <li className="nav-item">
    <a className="nav-link" href="#">
    <Icons img={FrutasIcon} description={"Frutas"}> </Icons>
    </a>
  </li>

  <li className="nav-item">
    <a className="nav-link" href="#">
    <Icons img={PezcadoIcon} description={"Pescaderia"}> </Icons> 
    </a>
  </li>

  <li className="nav-item">
    <a className="nav-link" href="#">
    <Icons img={VerdurasIcon} description={"Comestibles"}> </Icons> 
    </a>
  </li>

  <li className="nav-item">
    <a className="nav-link" href="#">
    <Icons img={PanIcon} description={"Comestibles"}> </Icons>
    </a>
  </li>
  
</ul> 


  );
}

export default navFilter;