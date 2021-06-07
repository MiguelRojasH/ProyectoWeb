
import React from "react"
import Header from "../components/header/header.js"
import Footer from "../components/footer/footer.js"
import Navlinks from "../components/links/nav-links"
import BannerProductos from "../components/NuestrosProductos/BannerProductos"
import NavFilter from "../components/navFilter/navFilter"
import ListaProductos from "../components/Productos/ListaProductos"
import $ from 'jquery';


function Productos() {
  return (

    <div>

     <Header></Header>
     <Navlinks></Navlinks>
     
     <BannerProductos title={"OFERTAS"}></BannerProductos>

      <NavFilter></NavFilter>
      <ListaProductos title={"Carne"}></ListaProductos>
     

     <Footer></Footer>

    </div> 

  );
}

export default Productos;


$(document).on('click',function () {

            $(".filter-button").click(function () {
                var value = $(this).attr('data-filter');

                if (value == "todos") {

                    $('.filter').show('1000');
                }
                else {

                    $(".filter").not('.' + value).hide('3000');
                    $('.filter').filter('.' + value).show('3000');

                }
            });

          });


