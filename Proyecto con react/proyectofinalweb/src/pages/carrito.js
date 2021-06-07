
import React from "react"
import Header from "../components/header/header.js"
import Footer from "../components/footer/footer.js"
import Navlinks from "../components/links/nav-links"
import CarritoCompras from "../components/Carrito/carrito"
import MiniApi from '../components/Carrito/Api/Miniapi';



function Carrito() {
  return (

    <div>

     <Header></Header>
     <Navlinks></Navlinks>
     <MiniApi></MiniApi>


     <Footer></Footer>

    </div> 

  );
}

export default Carrito;