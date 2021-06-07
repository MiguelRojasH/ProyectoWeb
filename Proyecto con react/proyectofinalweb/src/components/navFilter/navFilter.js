import React, {  useState as UseState} from 'react';

import Icons from "../icons/icons"

import ComestiblesIcon from "../../img/comestibles.svg"
import CarneIcon from "../../img/carne.svg"
import FrutasIcon from "../../img/cosecha.svg"
import PezcadoIcon from "../../img/pescado.svg"
import VerdurasIcon from "../../img/verduras.svg"
import PanIcon from "../../img/un-pan.svg"
import "./navFilter.css"
import $ from 'jquery';
import ReactDOM from 'react-dom'




function navFilter() {


  return (

    <ul className="nav nav-tabs" id="navbar-icons">

    {/* ----------------- */}

    <button className="btn btn-default filter-button" data-filter="todos">
        <li className="nav-item icons-nav">

            <a className="nav-link active" >
                <Icons img={ComestiblesIcon} description={"Todo"}> </Icons>
            </a>

        </li>
    </button >

    <button className="btn btn-default filter-button" data-filter="carne">
        <li className="nav-item icons-nav">

            <a className="nav-link " >
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
/* 
// Add active class to the current button (highlight it)
var header = document.getElementById("nav-tabs");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
} */
 