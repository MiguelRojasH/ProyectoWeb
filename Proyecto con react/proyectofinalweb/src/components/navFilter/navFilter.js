
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

    <button className="btn btn-default filter-button" data-filter="todos">
        <li className="nav-item active icons-nav">

            <a className="nav-link active">
                <Icons img={ComestiblesIcon} description={"Todo"}> </Icons>
            </a>

        </li>
    </button >

    <button className="btn btn-default filter-button" data-filter="carne">
        <li className="nav-item icons-nav">

            <a className="nav-link ">
                <Icons img={CarneIcon} description={"Carnes"}> </Icons>
            </a>

        </li>
    </button >

   
    <button className="btn btn-default filter-button" data-filter="frutas">
        <li className="nav-item icons-nav">
            <a className="nav-link ">
                <Icons img={FrutasIcon} description={"Frutas"}> </Icons>
            </a>
        </li>
    </button >


    <button className="btn btn-default filter-button" data-filter="peces">
        <li className="nav-item icons-nav">
            <a className="nav-link ">
                <Icons img={PezcadoIcon} description={"Pescadería"}> </Icons>
            </a>
        </li>
    </button >


    <button className="btn btn-default filter-button" data-filter="verduras">
        <li className="nav-item icons-nav">
            <a className="nav-link ">
                <Icons img={VerdurasIcon} description={"Verduras"}> </Icons>
            </a>
        </li>
    </button >


    <button className="btn btn-default filter-button" data-filter="panes">
        <li className="nav-item icons-nav">
            <a className="nav-link">
                <Icons img={PanIcon} description={"Panes"}> </Icons>
            </a>
        </li>
    </button >







</ul>




  );
}

export default navFilter;

$(document).on('click', '.nav-link.active', function() {
  var href = $(this).attr('href').substring(1);
  //alert(href);
  $(this).removeClass('active');
  $('.tab-pane[id="' + href + '"]').removeClass('active');
  
});
$(document).mouseup(function(e) {
    var container = $("nav-item"); // target ID or class
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        // get Event here
        $('.active').removeClass('active');
    }
}); 

