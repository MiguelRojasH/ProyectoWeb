import React from "react"
import "./prueba.css"
import $ from 'jquery'; import Card2 from "../cards/card2"

import Carne from "../../img/carne2.jpg"
import Chroizo from "../../img/chorizo2.jpg"
import Costilla from "../../img/costilla2.jpg"
import Tocino from "../../img/tocino2.jpg"
import Pollo from "../../img/pollo2.jpg"
import Cerdo from "../../img/cerdo2.jpg"
import Icons from "../icons/icons"

import ComestiblesIcon from "../../img/comestibles.svg"
import CarneIcon from "../../img/carne.svg"
import FrutasIcon from "../../img/cosecha.svg"
import PezcadoIcon from "../../img/pescado.svg"
import VerdurasIcon from "../../img/verduras.svg"
import PanIcon from "../../img/un-pan.svg"

const prueba = () => (


    <div className="container">
        <div className="">
            <h2>Filtering divs</h2>
        </div>

        <div>
            <button className="btn btn-primary filter-button" data-filter="all">All</button>
            <button className="btn btn-default filter-button" data-filter="photo">foto</button>
            <button className="btn btn-default filter-button" data-filter="graphic">Graphic</button>
            <button className="btn btn-default filter-button" data-filter="webdesign">Web design</button>

            
        </div>
        <br />




        <div className="row">

            {/* filter webdesign graphic  , filter photo ,ilter photo */}
            <div className="filter webdesign">
                <Card2 img={Carne} description={"Res"}></Card2>
            </div>
            <div className="filter photo">
                <Card2 img={Chroizo} description={"Chorizo"}></Card2>
            </div>

            <div className="filter photo">
                <Card2 img={Costilla} description={"Costilla"}></Card2>
            </div>

            <div className="filter graphic">
                <Card2 img={Tocino} description={"Tocino"}></Card2>
            </div>

            <div className="filter graphic">
                <Card2 img={Pollo} description={"Pollo"}></Card2>
            </div>

            <div className="filter graphic">
                <Card2 img={Cerdo} description={"Cerdo"}></Card2>
            </div>


        </div>


    </div>



);



$(document).ready(function () {

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {

            $('.filter').show('1000');
        }
        else {

            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

});

export default prueba;