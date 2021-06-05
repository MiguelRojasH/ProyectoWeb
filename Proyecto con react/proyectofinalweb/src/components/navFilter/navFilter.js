
import React from "react"
import Icons from "../icons/icons"

import ComestiblesIcon from "../../img/comestibles.svg"
import CarneIcon from "../../img/carne.svg"
import FrutasIcon from "../../img/cosecha.svg"
import PezcadoIcon from "../../img/pescado.svg"
import VerdurasIcon from "../../img/verduras.svg"
import PanIcon from "../../img/un-pan.svg"
import "./navFilter.css"
import $ from 'jquery';


function navFilter() {
  return (

    <ul className="nav nav-tabs">
    {/* ----------------- */}

    <button className="btn btn-default filter-button" data-filter="carne">
        <li className="nav-item">

            <div className="nav-link default">
                <Icons img={CarneIcon} description={"Carnes"}> </Icons>
            </div>

        </li>
    </button >

    <button className="btn btn-default filter-button" data-filter="carne">
        <li className="nav-item">
            <div className="nav-link">
                <Icons img={ComestiblesIcon} description={"Verduras"}> </Icons>
            </div>
        </li>
    </button >

   
    <button className="btn btn-default filter-button" data-filter="carne">
        <li className="nav-item">
            <div className="nav-link">
                <Icons img={FrutasIcon} description={"Frutas"}> </Icons>
            </div>
        </li>
    </button >


    <button className="btn btn-default filter-button" data-filter="carne">
        <li className="nav-item">
            <div className="nav-link">
                <Icons img={PezcadoIcon} description={"Pescadería"}> </Icons>
            </div>
        </li>
    </button >


    <button className="btn btn-default filter-button" data-filter="carne">
        <li className="nav-item">
            <div className="nav-link">
                <Icons img={VerdurasIcon} description={"Pan"}> </Icons>
            </div>
        </li>
    </button >


    <button className="btn btn-default filter-button" data-filter="carne">
        <li className="nav-item">
            <div className="nav-link">
                <Icons img={PanIcon} description={"Comestibles"}> </Icons>
            </div>
        </li>
    </button >





{/* VERDURAS */}

</ul>




  );
}

export default navFilter;

$(document).ready(function () {

  $(".filter-button").click(function () {
      var value = $(this).attr('data-filter');

      if (value == "carne") {

          $('.filter').show('1000');
      }
      else {

          $(".filter").not('.' + value).hide('3000');
          $('.filter').filter('.' + value).show('3000');

      }
  });

});